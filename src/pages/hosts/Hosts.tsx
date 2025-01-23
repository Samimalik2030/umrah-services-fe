import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Menu,
  Pagination,
  Skeleton,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import IconDots from "../../assets/icons/IconDots";
import IconSearch from "../../assets/icons/IconSearch";
import useGetHosts from "../../hooks/useGetHosts";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { UpdateHostStatusDTO } from "../../http/Api";

function Hosts() {
  const [page, setPage] = useState(1);
  const { hosts, isLoading } = useGetHosts(page);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { mutate: changeBusinessStatus, isPending } = useMutation({
    mutationKey: ["changeStatusBusiness"],
    mutationFn: ({ id, data }: { id: string; data: UpdateHostStatusDTO }) =>
      http.hosts.hostControllerPatchStatus(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hosts"] });
      notifications.show({
        title: "Success",
        message: "Host status updated successfully",
        color: "green",
      });
    },
  });

  const handleStatusChange = (id: string, data: any) => {
    changeBusinessStatus({ id, data });
  };

  const filteredHosts = hosts?.data?.filter((host) => {
    const fullName = `${host?.personalInformation?.firstName ?? ""} ${
      host?.personalInformation?.lastName ?? ""
    }`.toLowerCase();
    const email = host?.personalInformation?.email?.toLowerCase() ?? "";
    const status = host?.status?.toLowerCase() ?? "";
    const searchTerm = search.toLowerCase();

    return (
      fullName.includes(searchTerm) ||
      email.includes(searchTerm) ||
      status.includes(searchTerm)
    );
  });
  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Hosts</Title>

        <TextInput
          w={"50%"}
          leftSection={<IconSearch withOutline fill="none" />}
          placeholder="Search by names, email, status"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Group>
      <Card>
        {isLoading || isPending ? (
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
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Address</Table.Th>
                  <Table.Th>Town</Table.Th>
                  <Table.Th>Country Code</Table.Th>
                  <Table.Th>Plan Name</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {filteredHosts
                  ?.filter((host) => host?.status !== "Draft")
                  .map((host: any, index: number) => (
                    <Table.Tr
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/host/${host?.id}/properties`);
                      }}
                    >
                      <Table.Td>{index + 1}</Table.Td>
                      <Table.Td>
                        <Group>
                          <Stack gap={0}>
                            <Text fw={500} fz={14}>
                              {host?.personalInformation?.firstName ?? "N/A"}{" "}
                              {host?.personalInformation?.lastName ?? "N/A"}
                            </Text>
                            <Text fw={300} fz={12}>
                              {host?.personalInformation?.contact ?? "N/A"}
                            </Text>
                          </Stack>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        {host?.personalInformation?.email ?? "N/A"}
                      </Table.Td>
                      <Table.Td>
                        {host?.personalInformation?.address ?? "N/A"}
                      </Table.Td>
                      <Table.Td>
                        {host?.personalInformation?.town ?? "N/A"}
                      </Table.Td>
                      <Table.Td>
                        {host?.personalInformation?.countryCode ?? "N/A"}
                      </Table.Td>
                      <Table.Td>
                        {host?.personalInformation?.planName ?? "N/A"} (
                        {host?.paymentStatus})
                      </Table.Td>
                      <Table.Td>
                        <Badge
                          variant="outline"
                          color={
                            host?.status === "Active"
                              ? "green"
                              : host?.status === "Rejected"
                                ? "red"
                                : "orange"
                          }
                        >
                          {host?.status ?? "N/A"}
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
                                handleStatusChange(host?.id, {
                                  status: "Approved",
                                });
                              }}
                            >
                              Approve
                            </Menu.Item>
                            <Menu.Item
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStatusChange(host?.id, {
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
        <Group justify="flex-end" p={"lg"}>
          <Pagination total={hosts?.pagination.page || 1} onChange={setPage} />
        </Group>
      </Card>
    </Stack>
  );
}

export default Hosts;
