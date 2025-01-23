import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  Menu,
  Modal,
  Pagination,
  Skeleton,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import useGetInterviews from "../../hooks/useGetInterviews";
import { Interview, UpdateInterviewDto } from "../../http/Api";
import IconDots from "../../assets/icons/IconDots";
import http from "../../http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import IconSearch from "../../assets/icons/IconSearch";

const Students = () => {
  const theme = useMantineTheme();

  const [page, setPage] = useState(1);

  const { interviews, isLoading: gettingInterviews } = useGetInterviews(page);
  const queryClient = useQueryClient();
  const [opened, { close }] = useDisclosure(false);
  const [selectedInterview] = useState<Interview | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const { mutate: changeStatus, isPending: changingStatus } = useMutation({
    mutationKey: ["changeStatusInterview"],
    mutationFn: ({ id, data }: { id: string; data: UpdateInterviewDto }) =>
      http.admins.adminControllerPatchInterview(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interviews"] });
    },
  });

  const handleStatusChange = (id: string, data: UpdateInterviewDto) => {
    changeStatus({ id, data });
  };

  const { mutate: scheduleInterview, isPending: schedulingInterview } =
    useMutation({
      mutationFn: ({ id, date }: { id: string; date: Date }) => {
        const interviewDate = date.toISOString();
        return http.admins.adminControllerPatchInterview(id, {
          interviewDate: interviewDate,
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["interviews"] });
        close();
      },
      onError: (error) => {
        console.error("Error scheduling interview:", error);
      },
    });

  // const handleEditClick = (interview: Interview) => {
  //   setSelectedInterview(interview);
  //   setSelectedDate(new Date(interview.date));
  //   open();
  // };

  const handleUpdateClick = () => {
    if (selectedInterview && selectedDate) {
      scheduleInterview({ id: selectedInterview.id, date: selectedDate });
    } else {
      console.error("Invalid date or interview selection");
    }
  };

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Students</Title>
        <Group>
          <TextInput
            w={370}
            leftSection={
              <IconSearch
                withOutline
                fill="none"
                color={theme.colors.gray[5]}
              />
            }
            placeholder="Search by names or countries"
          />
          <Button>Search</Button>
        </Group>
      </Group>
      <Card>
        {gettingInterviews || changingStatus ? (
          <Stack>
            <Skeleton height={50} circle animate />
            <Skeleton height={50} animate />
            <Skeleton height={50} animate />
          </Stack>
        ) : (
          <Table.ScrollContainer minWidth={500}>
            <Table highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>#</Table.Th>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Degree</Table.Th>
                  <Table.Th>Country</Table.Th>
                  <Table.Th>Interview Date</Table.Th>
                  <Table.Th>Host Assigned</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Plan Name</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {interviews?.data?.others?.map((interview: Interview, i) => (
                  <Table.Tr key={interview.id}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td>
                      <Group>
                        <Avatar
                          src={interview.student.user?.avatar?.url || ""}
                        />
                        <Stack gap={0}>
                          <Text fw={500} fz={14}>
                            {interview.student.user.fullName}
                          </Text>
                          <Text fw={300} fz={12}>
                            {interview.student.user.email}
                          </Text>
                          <Text fw={300} fz={12}>
                            {interview.student.personalInfo?.contact}
                          </Text>
                        </Stack>
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      {interview.student.educations
                        .flatMap((d) => d.degree)
                        .join(", ") || "N/A"}
                    </Table.Td>
                    <Table.Td>
                      {interview.student.personalInfo?.country || "N/A"}
                    </Table.Td>
                    <Table.Td>
                      {new Date(interview.date).toLocaleDateString("en-US")}
                    </Table.Td>
                    <Table.Td>{"adds"}</Table.Td>

                    <Table.Td>
                      <Badge
                        variant="light"
                        radius={"xl"}
                        color={
                          interview.status === "Scheduled"
                            ? "yellow"
                            : interview.status === "Passed"
                              ? "green"
                              : interview.status === "Failed"
                                ? "red"
                                : interview.status === "Cancelled"
                                  ? "red"
                                  : "blue"
                        }
                      >
                        {interview.status}
                      </Badge>
                    </Table.Td>
                    <Table.Td>{interview.student?.planName ?? "N/A"}</Table.Td>
                    <Table.Td>
                      <Menu
                        withArrow
                        width={300}
                        position="bottom"
                        transitionProps={{ transition: "pop" }}
                        withinPortal
                      >
                        <Menu.Target>
                          <ActionIcon variant="subtle">
                            <IconDots size={18} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item
                            onClick={() => {
                              handleStatusChange(interview.id, {
                                status: "Passed",
                              });
                            }}
                          >
                            Approve
                          </Menu.Item>
                          <Menu.Item
                            onClick={() => {
                              handleStatusChange(interview.id, {
                                status: "Failed",
                              });
                            }}
                          >
                            Reject
                          </Menu.Item>
                          <Menu.Item
                            onClick={() => {
                              handleStatusChange(interview.id, {
                                status: "Cancelled",
                              });
                            }}
                          >
                            Cancel
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        )}

        <Group justify="flex-end" p={"lg"}>
          <Pagination
            total={interviews?.pagination.pages || 1}
            onChange={setPage}
          />
        </Group>
      </Card>
      <Modal opened={opened} onClose={close} title="Edit Interview Time">
        <Stack>
          <DateTimePicker
            defaultValue={selectedDate}
            label="Pick Date and Time"
            placeholder="Schedule Interview"
            onChange={(date) => {
              console.log(date);

              setSelectedDate(date);
            }}
            w={"100%"}
          />
          <Button
            onClick={handleUpdateClick}
            loading={schedulingInterview}
            fullWidth
          >
            Update Interview
          </Button>
        </Stack>
      </Modal>
    </Stack>
  );
};

export default Students;
