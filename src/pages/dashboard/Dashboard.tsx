import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  LoadingOverlay,
  Menu,
  Modal,
  Pagination,
  Stack,
  Table,
  Title,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import useGetInterviews from "../../hooks/useGetInterviews";
import { Interview, UpdateInterviewDto } from "../../http/Api";
import IconDots from "../../assets/icons/IconDots";
import http from "../../http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const { interviews, isLoading } = useGetInterviews(page);
  const queryClient = useQueryClient();
  const [opened, { close }] = useDisclosure(false);
  const [selectedInterview] = useState<Interview | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const { mutate: changeStatus, isPending: changingStatus } = useMutation({
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
    <Stack p={"xl"}>
      <LoadingOverlay
        visible={isLoading || changingStatus || schedulingInterview}
      />
      <Title order={3}>Students Applications</Title>
      <Card>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th ta={"center"}>Name</Table.Th>
              <Table.Th ta={"center"}>Email</Table.Th>
              <Table.Th ta={"center"}>Status</Table.Th>
              <Table.Th ta={"center"}>Scheduled Date</Table.Th>
              <Table.Th ta={"center"}>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {interviews?.data?.others?.map((interview: Interview) => (
              <Table.Tr key={interview.id} ta={"center"}>
                <Table.Td>{interview.student.user.fullName}</Table.Td>
                <Table.Td>{interview.student.user.email}</Table.Td>
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
                <Table.Td>
                  {new Date(interview.date).toLocaleDateString("en-US")}
                </Table.Td>
                <Table.Td>
                  <Group justify="center">
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
                        {/* <Menu.Label>Actions</Menu.Label> */}
                        {/* <Menu.Item onClick={() => handleEditClick(interview)}>
                          Edit
                        </Menu.Item> */}
                        {/* <Menu.Divider /> */}
                        {/* <Menu.Label>Status Actions</Menu.Label> */}
                        <Menu.Item
                          onClick={() =>
                            handleStatusChange(interview.id, {
                              status: "Passed",
                            })
                          }
                        >
                          Pass
                        </Menu.Item>
                        <Menu.Item
                          onClick={() =>
                            handleStatusChange(interview.id, {
                              status: "Failed",
                            })
                          }
                        >
                          Fail
                        </Menu.Item>
                        <Menu.Item
                          onClick={() =>
                            handleStatusChange(interview.id, {
                              status: "Cancelled",
                            })
                          }
                        >
                          Cancel
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
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

export default Dashboard;
