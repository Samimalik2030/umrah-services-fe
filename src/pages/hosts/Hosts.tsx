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

function Hosts() {
  return (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Students</Title>
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
              <Table.Th>#</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Total Properties</Table.Th>
              <Table.Th>Property Types</Table.Th>
              <Table.Th>Location</Table.Th>
              <Table.Th>Available Units</Table.Th>
              <Table.Th>Student Assigned</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>1</Table.Td>
              <Table.Td>
                <Group>
                  <Avatar src={""} />
                  <Stack gap={0}>
                    <Text fw={500} fz={14}>
                      {"Zara Darz"}
                    </Text>
                    <Text fw={300} fz={12}>
                      {"zara@example.com"}
                    </Text>
                    <Text fw={300} fz={12}>
                      {"+123456789"}
                    </Text>
                  </Stack>
                </Group>
              </Table.Td>
              <Table.Td>{3}</Table.Td>
              <Table.Td>{"Room"}</Table.Td>
              <Table.Td>{"USA"}</Table.Td>
              <Table.Td>{5}</Table.Td>
              <Table.Td>{5}</Table.Td>
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

export default Hosts;
