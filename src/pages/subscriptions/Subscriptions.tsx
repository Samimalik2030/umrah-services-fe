import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  Menu,
  Pagination,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import IconDots from "../../assets/icons/IconDots";
import IconSearch from "../../assets/icons/IconSearch";

function Subscriptions() {
  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Subscriptions</Title>
        <Group>
          <TextInput
            w={370}
            leftSection={<IconSearch withOutline fill="none" />}
            placeholder="Search by names or countries"
          />
          <Button>Search</Button>
        </Group>
      </Group>
      <Card>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>User</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Plan</Table.Th>
              <Table.Th>Start Date</Table.Th>
              <Table.Th>End Date</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Group>
                  <Avatar src={""} />
                  <Text fw={500} fz={14}>
                    {"Zara Darz"}
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td>{"Student"}</Table.Td>
              <Table.Td>{"Active"}</Table.Td>
              <Table.Td>{"1/15/2025"}</Table.Td>
              <Table.Td>{"1/15/2025"}</Table.Td>
              <Table.Td>
                <Badge variant="outline" color="green">
                  Active
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
                    <Menu.Item>Approve</Menu.Item>
                    <Menu.Item>Reject</Menu.Item>
                    <Menu.Item>Cancel</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
        <Group justify="flex-end" p={"lg"}>
          <Pagination total={1} />
        </Group>
      </Card>
    </Stack>
  );
}

export default Subscriptions;
