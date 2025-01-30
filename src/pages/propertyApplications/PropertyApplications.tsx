import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Menu,
  Pagination,
  Skeleton,
  Stack,
  Table,
  TextInput,
  Title
} from "@mantine/core";
import IconDots from "../../assets/icons/IconDots";
import IconSearch from "../../assets/icons/IconSearch";
import IconArrowNarrowLeft from "../../assets/icons/IconArrowNarrowLeft";
import { useNavigate } from "react-router-dom";
import useGetPropertyApplications from "../../hooks/useGetPropertyApplications";
import { useState } from "react";
import { PatchApplicationPaymentStatus } from "../../http/Api";
import http from "../../http";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const PropertyApplications = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { applications, isLoading } = useGetPropertyApplications(page);
  const queryClient = useQueryClient();
  const { mutate: updateApplication, isPending: updatingApplication } =
    useMutation({
      mutationFn: ({
        id,
        data
      }: {
        id: string;
        data: PatchApplicationPaymentStatus;
      }) =>
        http.applications
          .applicationControllerPatchAppPaymentStatus(id, data)
          .then(() => {
            queryClient.invalidateQueries({ queryKey: ["applications"] });
            queryClient.invalidateQueries({ queryKey: ["application"] });
          })
    });

  const handleUpdate = (
    id: string,
    paymentStatus: PatchApplicationPaymentStatus["paymentStatus"]
  ) => {
    const data: PatchApplicationPaymentStatus = { paymentStatus };
    updateApplication({ id, data });
  };

  return (
    <Stack>
      <Group justify="space-between">
        <Group gap={"xs"} align="center">
          <ActionIcon variant="transparent" onClick={() => navigate(-1)}>
            <IconArrowNarrowLeft />
          </ActionIcon>
          <Title order={3}>Property Applications</Title>
        </Group>
        <Group>
          <TextInput
            w={370}
            leftSection={<IconSearch withOutline fill="none" />}
            placeholder="Search by names, email, status"
          />
          <Button>Search</Button>
        </Group>
      </Group>
      <Card>
        {isLoading || updatingApplication ? (
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
                  <Table.Th>Property</Table.Th>
                  <Table.Th>Host</Table.Th>
                  <Table.Th>Student</Table.Th>
                  <Table.Th>Move In Date</Table.Th>
                  <Table.Th>Move Out Date</Table.Th>
                  <Table.Th>Payment Status</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {applications?.data.map((application, index) => (
                  <Table.Tr
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/property-applications/${application.id}`);
                    }}
                  >
                    <Table.Td>{index + 1}</Table.Td>
                    <Table.Td>{application.property?.name ?? "N/A"}</Table.Td>
                    <Table.Td>
                      {application.property.host.personalInformation?.title}{" "}
                      {application.property.host.personalInformation?.firstName}{" "}
                      {application.property.host.personalInformation?.lastName}
                    </Table.Td>
                    <Table.Td>
                      {application.student.user.fullName ?? "N/A"}
                    </Table.Td>
                    <Table.Td>{application.moveIn ?? "N/A"}</Table.Td>
                    <Table.Td>{application.moveOut ?? "N/A"}</Table.Td>
                    <Table.Td>
                      <Badge
                        variant="outline"
                        color={
                          application?.paymentStatus === "Paid"
                            ? "green"
                            : "red"
                        }
                      >
                        {application?.paymentStatus ?? "N/A"}
                      </Badge>
                    </Table.Td>
                    <Table.Td tt={"capitalize"}>
                      <Badge
                        variant="outline"
                        color={
                          application?.status === "Approved"
                            ? "green"
                            : application?.status === "Rejected"
                              ? "red"
                              : "orange"
                        }
                      >
                        {application?.status ?? "N/A"}
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
                              handleUpdate(application?.id, "Paid");
                            }}
                          >
                            Rent Paid
                          </Menu.Item>
                          <Menu.Item
                            onClick={(e) => {
                              e.stopPropagation();
                              handleUpdate(application?.id, "Unpaid");
                            }}
                          >
                            Rent Not Paid
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
      </Card>
      <Group justify="flex-end" p={"lg"}>
        <Pagination
          total={applications?.pagination.pages || 1}
          onChange={setPage}
        />
      </Group>
    </Stack>
  );
};

export default PropertyApplications;
