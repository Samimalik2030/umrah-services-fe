import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
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
import { useState } from "react";
import { useGetCompanies } from "../../hooks/useGetCompanies";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import http from "../../http";
import { UpdateBusinessStatusDTO } from "../../http/Api";

function Companies() {
  const [searchInput, setSearchInput] = useState<string>(""); 
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { companies,isLoading} = useGetCompanies(page,search);

  const queryClient = useQueryClient();

  const { mutate: changeBusinessStatus, isPending } = useMutation({
    mutationKey: ["changeStatusBusiness"],
    mutationFn: ({ id, data }: { id: string; data: UpdateBusinessStatusDTO }) =>
      http.businesses.businessControllerPatchStatus(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      notifications.show({
        title: "Success",
        message: "Business status updated successfully",
        color: "green",
      });
    },
  });



  const handleStatusChange = (id: string, data: UpdateBusinessStatusDTO) => {
    changeBusinessStatus({ id, data });
  };


  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Companies</Title>
        <Group>
          <TextInput
            w={370}
            leftSection={<IconSearch withOutline fill="none" />}
            placeholder="Search by names"
            onChange={(e)=>setSearchInput(e.target.value)}
          />
                <Button onClick={() => setSearch(searchInput)} loading={isLoading}>Search</Button>

        </Group>
      </Group>

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
                <Table.Th>Name</Table.Th>
                <Table.Th>Business Type</Table.Th>
                <Table.Th>Total Employees</Table.Th>
                <Table.Th>Operation Site</Table.Th>
                <Table.Th>Location</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {companies?.data?.map((company, index) => (
                <Table.Tr
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/companies/${company?.id}/jobs`);
                  }}
                >
                  <Table.Td>
                    <Group>
                      <Box
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <Avatar src={company.logoUrl} radius="xl" size="lg" />
                        {company?.jobCounts?.pending > 0 && (
                          <Badge
                            color="red"
                            variant="filled"
                            size="sm"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              transform: "translate(-25%, -25%)", // Adjust positioning
                            }}
                          >
                            {String(company?.jobCounts.pending)}
                          </Badge>
                        )}
                      </Box>
                      <Stack gap={0}>
                        <Text fw={500} fz={14}>
                          {company?.name}
                        </Text>
                        <Text fw={300} fz={12}>
                         {
                          company.members[0].user.email
                         }
                        </Text>
                        <Text fw={300} fz={12}>
                          {company?.phone}
                        </Text>
                      </Stack>
                    </Group>
                  </Table.Td>
                  <Table.Td tt={"capitalize"}>{company?.businessRole}</Table.Td>
                  <Table.Td>{company?.employeesCount}</Table.Td>
                  <Table.Td>{company?.operationSite}</Table.Td>
                  <Table.Td>
                    <Box w={200}>
                      {" "}
                      <Text truncate="end">{company?.addressLine1}</Text>
                    </Box>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      variant="outline"
                      color={
                        company?.status === "Approved"
                          ? "green"
                          : company?.status === "Blocked"
                            ? "red"
                            : "orange"
                      }
                    >
                      {company?.status ?? "N/A"}
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
                            handleStatusChange(company?.id ?? "", {
                              status: "Approved",
                            });
                          }}
                        >
                          Approve
                        </Menu.Item>
                        <Menu.Item
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(company?.id ?? "", {
                              status: "Blocked",
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
        <Pagination
          total={companies?.pagination.pages || 1}
          onChange={setPage}
        />
      </Group>
    </Stack>
  );
}

export default Companies;
