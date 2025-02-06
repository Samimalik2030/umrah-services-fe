import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Drawer,
  Group,
  Image,
  Menu,
  Modal,
  Pagination,
  Skeleton,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
  useMantineTheme
} from "@mantine/core";
import useGetInterviews from "../../hooks/useGetInterviews";
import {
  Interview,
  PatchPaymentStatus,
  Student,
  UpdateInterviewStatus
} from "../../http/Api";
import IconDots from "../../assets/icons/IconDots";
import http from "../../http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import IconSearch from "../../assets/icons/IconSearch";
import countries from "../../assets/country-info.json";
import StudentDetails from "./StudentDetails";

const Interviews = () => {
  const theme = useMantineTheme();
  const [page, setPage] = useState(1);

  const { interviews, isLoading: gettingInterviews } = useGetInterviews(page);
  const queryClient = useQueryClient();
  const [opened, { open, close }] = useDisclosure(false);

  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [selectedStudent, setselectedStudent] = useState<Student>();

  const { mutate: changeStatus, isPending: changingStatus } = useMutation({
    mutationKey: ["changeStatusInterview"],
    mutationFn: ({ id, data }: { id: string; data: UpdateInterviewStatus }) =>
      http.interviews.interviewControllerPatchInterview(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interviews"] });
    }
  });

  const handleStatusChange = (id: string, data: UpdateInterviewStatus) => {
    changeStatus({ id, data });
  };

  const { mutate: updateStudentStatus, isPending: updatingStudentStatus } =
    useMutation({
      mutationFn: ({ id, data }: { id: string; data: PatchPaymentStatus }) => {
        return http.students.studentControllerPatchStatus(id, data);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["interviews"] });
        setselectedStudent(undefined);
        close();
      },
      onError: (error) => {
        console.error("Error scheduling interview:", error);
      }
    });

  const handleStudentStatusChange = (id: string, data: PatchPaymentStatus) => {
    updateStudentStatus({ id, data });
  };

  // const handleEditClick = (interview: Interview) => {
  //   setSelectedInterview(interview);
  //   setSelectedDate(new Date(interview.date));
  //   open();
  // };

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Interviews</Title>
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
                  <Table.Th>Plan Name</Table.Th>
                  <Table.Th>Country</Table.Th>
                  <Table.Th>Interview Date</Table.Th>
                  <Table.Th>Interview Status</Table.Th>
                  <Table.Th>Payment</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {interviews?.data?.map((interview: Interview, i) => (
                  <Table.Tr key={interview.id}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setselectedStudent(interview.student);
                        open2();
                      }}
                    >
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

                    <Table.Td>{interview.student?.planName ?? "N/A"}</Table.Td>
                    <Table.Td>
                      {countries.filter(
                        (country) =>
                          country.id.toString() ===
                          interview.student.personalInfo?.country
                      )[0]?.name || "N/A"}
                    </Table.Td>
                    <Table.Td>
                      {new Date(interview.date).toLocaleDateString("en-US")}
                    </Table.Td>

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
                      <Badge
                        color={
                          interview.student?.paymentStatus === "Paid"
                            ? "green"
                            : "red"
                        }
                        variant="light"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setselectedStudent(interview.student);
                          open();
                        }}
                      >
                        {interview.student?.paymentStatus ?? "N/A"}
                      </Badge>
                    </Table.Td>
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
                                status: "Passed"
                              });
                            }}
                          >
                            Approve
                          </Menu.Item>
                          <Menu.Item
                            onClick={() => {
                              handleStatusChange(interview.id, {
                                status: "Failed"
                              });
                            }}
                          >
                            Reject
                          </Menu.Item>
                          <Menu.Item
                            onClick={() => {
                              handleStatusChange(interview.id, {
                                status: "Cancelled"
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
      <Modal
        opened={opened}
        onClose={close}
        title={
          <Title order={5}>
            {selectedStudent?.user?.fullName} Payment Invoice
          </Title>
        }
      >
        <Stack>
          <Image fit="contain" src={selectedStudent?.paymentInvoice?.url} />
          <Group grow>
            <Button
              onClick={() =>
                selectedStudent?.id &&
                handleStudentStatusChange(selectedStudent.id, {
                  paymentStatus: "Paid"
                })
              }
              loading={updatingStudentStatus}
              color="green"
            >
              Paid
            </Button>
            <Button
              onClick={() =>
                selectedStudent?.id &&
                handleStudentStatusChange(selectedStudent.id, {
                  paymentStatus: "Unpaid"
                })
              }
              loading={updatingStudentStatus}
              color="red"
            >
              Not Paid
            </Button>
          </Group>
        </Stack>
      </Modal>
      <Drawer opened={opened2} onClose={close2} position="right" size={"100%"}>
        <StudentDetails student={selectedStudent} />
      </Drawer>
    </Stack>
  );
};

export default Interviews;
