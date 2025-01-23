import {
  Avatar,
  Card,
  Text,
  Group,
  Stack,
  Divider,
  Spoiler,
  Skeleton,
  Title,
  ActionIcon,
  Table,
  Badge,
  Menu,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCompany, useGetCompanyJobs } from "../../hooks/useGetCompanies";
import IconArrowNarrowLeft from "../../assets/icons/IconArrowNarrowLeft";
import IconDots from "../../assets/icons/IconDots";
import { useDisclosure } from "@mantine/hooks";
import CompanyJobDetailDrawer from "./CompanyJobDetailDrawer";
import { UpdateJobStatusDTO } from "../../http/Api";
import { notifications } from "@mantine/notifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";

function CompanyDetail() {
  const [opened, { open, close }] = useDisclosure(false);
  const { id } = useParams();
  const { company, isLoading } = useGetCompany(id ?? "");
  const { jobs, isLoading: jobsLoader } = useGetCompanyJobs(id ?? "");
  const [job, setJob] = useState<string>("");

  const queryClient = useQueryClient();
  const { mutate: changeJobStatus, isPending } = useMutation({
    mutationKey: ["changeStatusJob"],
    mutationFn: ({ id, data }: { id: string; data: UpdateJobStatusDTO }) =>
      http.jobs.jobControllerPatchStatus(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      notifications.show({
        title: "Success",
        message: "Job status updated successfully",
        color: "green",
      });
    },
  });

  const handleStatusChange = (id: string, data: UpdateJobStatusDTO) => {
    changeJobStatus({ id, data });
  };

  const navigate = useNavigate();
  return (
    <Stack>
      <Group>
        <ActionIcon variant="transparent" onClick={() => navigate(-1)}>
          <IconArrowNarrowLeft />
        </ActionIcon>
        <Title order={3}> Your Company Detail</Title>
      </Group>

      {isLoading ? (
        <Stack>
          <Skeleton height={50} circle animate />
          <Skeleton height={50} animate />
          <Skeleton height={50} animate />
        </Stack>
      ) : (
        <Card withBorder shadow="xs" w={{ xs: "100%", md: "50%" }}>
          <Stack>
            <Group justify="space-between" align="start">
              <Group align="center">
                <Avatar
                  size="xl"
                  src={company?.logoUrl ?? null}
                  style={{ border: "0.5px solid grey" }}
                />
                <Stack gap={4}>
                  <Text fw={600} size="lg">
                    {company?.name ?? "N/A"}
                  </Text>
                  <Text fw={600} size="sm">
                    Email
                  </Text>
                  <Text fw={600} size="sm">
                    {company?.phone ?? "N/A"}
                  </Text>
                  <Badge
                    color={
                      company?.status === "Active"
                        ? "green"
                        : company?.status === "Blocked"
                          ? "red"
                          : "orange"
                    }
                  >
                    {company?.status ?? "N/A"}
                  </Badge>
                </Stack>
              </Group>

              <Stack>
                <Group gap={4}>
                  <Text fw={600} size="sm">
                    Employee Count:
                  </Text>
                  <Text>{company?.employeesCount ?? "N/A"}</Text>
                </Group>

                <Group gap={4}>
                  <Text fw={600} size="sm">
                    Business Type:
                  </Text>
                  <Text tt="capitalize">{company?.businessType ?? "N/A"}</Text>
                </Group>
              </Stack>
            </Group>
          </Stack>

          <Divider w="100%" size="sm" my="sm" />

          <Stack gap="xs">
            <Stack>
              <Text fw={600} size="sm">
                Description:
              </Text>
              <Spoiler
                maxHeight={50}
                showLabel="Show more"
                hideLabel="Show less"
              >
                {company?.description ?? "N/A"}
              </Spoiler>
            </Stack>

            <Group>
              <Group gap={4}>
                <Text fw={600} size="sm">
                  City:
                </Text>
                <Text tt="capitalize">{company?.city ?? "N/A"}</Text>
              </Group>

              <Group gap={4}>
                <Text fw={600} size="sm">
                  State:
                </Text>
                <Text tt="capitalize">{company?.state ?? "N/A"}</Text>
              </Group>

              <Group gap={4}>
                <Text fw={600} size="sm">
                  Country:
                </Text>
                <Text tt="capitalize">{company?.country ?? "N/A"}</Text>
              </Group>

              <Group gap={4}>
                <Text fw={600} size="sm">
                  Zip Code:
                </Text>
                <Text tt="capitalize">{company?.zip ?? "N/A"}</Text>
              </Group>
            </Group>

            <Group gap={4}>
              <Text fw={600} size="sm">
                Address Line 1:
              </Text>
              <Text tt="capitalize">{company?.addressLine1 ?? "N/A"}</Text>
            </Group>

            <Group gap={4}>
              <Text fw={600} size="sm">
                Address Line 2:
              </Text>
              <Text tt="capitalize">{company?.addressLine2 || "N/A"}</Text>
            </Group>

            <Group>
              {" "}
              <Group gap={4}>
                <Text fw={600} size="sm">
                  Nearest Bus Stop:
                </Text>
                <Text>{company?.nearestBusStop ?? "N/A"}</Text>
              </Group>
              <Group gap={4}>
                <Text fw={600} size="sm">
                  Next Station:
                </Text>
                <Text>{company?.nextStation ?? "N/A"}</Text>
              </Group>
              <Group gap={4}>
                <Text fw={600} size="sm">
                  Bus Routes:
                </Text>
                <Text>{company?.busRoute ?? "N/A"}</Text>
              </Group>
              <Group gap={4}>
                <Text fw={600} size="sm">
                  Operation Site:
                </Text>
                <Text tt="capitalize">{company?.operationSite ?? "N/A"}</Text>
              </Group>
            </Group>
          </Stack>
        </Card>
      )}

      <Text fw={600} size="xl">
        Jobs
      </Text>
      <Stack>
        {jobsLoader || isPending ? (
          <Stack>
            <Skeleton height={50} animate />
            <Skeleton height={50} animate />
          </Stack>
        ) : (
          <Table.ScrollContainer minWidth={500}>
            <Table highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Industry Preference</Table.Th>
                  <Table.Th>Job Type</Table.Th>
                  <Table.Th>Desired InternshipRole</Table.Th>

                  <Table.Th>Status</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {jobs?.data?.map((job: any, index: number) => (
                  <Table.Tr
                    key={index}
                    onClick={() => {
                      open();
                      setJob(job?.id ?? "");
                    }}
                  >
                    <Table.Td>
                      <Text fw={500} fz={14}>
                        {job?.title}
                      </Text>
                    </Table.Td>
                    <Table.Td tt={"capitalize"}>
                      {job?.industryPreference}
                    </Table.Td>
                    <Table.Td tt={"capitalize"}>{job?.jobType}</Table.Td>
                    <Table.Td>{job?.desiredInternshipRole}</Table.Td>
                    <Table.Td>
                      <Badge
                        variant="outline"
                        color={
                          job?.status === "Approved"
                            ? "green"
                            : job?.status === "Rejected"
                              ? "red"
                              : "orange"
                        }
                      >
                        {job?.status ?? "N/A"}
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
                          <ActionIcon
                            variant="subtle"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <IconDots size={18} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusChange(job?.id ?? "", {
                                status: "Approved",
                              });
                            }}
                          >
                            Approve
                          </Menu.Item>
                          <Menu.Item
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusChange(job?.id ?? "", {
                                status: "Rejected",
                              });
                            }}
                          >
                            Reject
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
      </Stack>

      <CompanyJobDetailDrawer opened={opened} onClose={close} id={job} />
    </Stack>
  );
}

export default CompanyDetail;
