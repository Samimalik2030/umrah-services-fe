import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
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
import { useState } from "react";
import { useGetCompanies } from "../../hooks/useGetCompanies";
import { useNavigate } from "react-router-dom";

function Companies() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { companies, isLoading } = useGetCompanies(page);

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Companies</Title>
        <Group>
          <TextInput
            w={370}
            leftSection={<IconSearch withOutline fill="none" />}
            placeholder="Search by names or countries"
          />
          <Button>Search</Button>
        </Group>
      </Group>

      {isLoading ? (
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
              {companies?.data?.map((company: any, index: number) => (
                <Table.Tr
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/companies/${company?.id}`);
                  }}
                >
                  <Table.Td>
                    <Group>
                      <Avatar src={company?.logoUrl} />
                      <Stack gap={0}>
                        <Text fw={500} fz={14}>
                          {company?.name}
                        </Text>
                        <Text fw={300} fz={12}>
                          {"email"}
                        </Text>
                        <Text fw={300} fz={12}>
                          {company?.phone}
                        </Text>
                      </Stack>
                    </Group>
                  </Table.Td>
                  <Table.Td tt={"capitalize"}>{company?.businessType}</Table.Td>
                  <Table.Td>{company?.employeesCount}</Table.Td>
                  <Table.Td>{company?.operationSite}</Table.Td>
                  <Table.Td>{company?.addressLine1}</Table.Td>
                  <Table.Td>
                    <Badge variant="outline" color="green">
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
                        <Menu.Item>Approve</Menu.Item>
                        <Menu.Item>Reject</Menu.Item>
                        <Menu.Item>Cancel</Menu.Item>
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
