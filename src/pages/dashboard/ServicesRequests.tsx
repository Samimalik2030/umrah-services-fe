import React from "react";
import {
  Table,
  ScrollArea,
  Badge,
  Container,
  Stack,
  Title,
  ActionIcon,
  Menu,
  Button,
  Group,
  Modal,
  TextInput,
} from "@mantine/core";
import IconDots from "../../assets/icons/IconDots";
import { useDisclosure } from "@mantine/hooks";

const bookings = [
  {
    userName: "Sami Ullah",
    bookingDateTime: new Date("2025-06-03T10:00:00Z"),
    status: "PENDING",
    notes: "Need urgent repair for washing machine.",
    serviceAddress: "101 Tech Street, Lahore",
  },
  {
    userName: "Ayesha Tariq",
    bookingDateTime: new Date("2025-06-04T14:30:00Z"),
    status: "PENDING",
    notes: "Install ceiling fan.",
    serviceAddress: "22 Green Road, Karachi",
  },
  {
    userName: "Hassan Mirza",
    bookingDateTime: new Date("2025-06-05T09:00:00Z"),
    status: "PENDING",
    notes: "Fix broken faucet.",
    serviceAddress: "Block D, Faisalabad",
  },
  {
    userName: "Fatima Noor",
    bookingDateTime: new Date("2025-06-06T12:15:00Z"),
    status: "PENDING",
    notes: "Cleaning service was cancelled.",
    serviceAddress: "Phase 6, DHA, Lahore",
  },
  {
    userName: "Usman Ghani",
    bookingDateTime: new Date("2025-06-07T16:00:00Z"),
    status: "PENDING",
    notes: "AC servicing required.",
    serviceAddress: "House 45, Islamabad",
  },
  {
    userName: "Zara Jameel",
    bookingDateTime: new Date("2025-06-08T11:30:00Z"),
    status: "PENDING",
    notes: "Paint bedroom walls.",
    serviceAddress: "Gulshan-e-Iqbal, Karachi",
  },
  {
    userName: "Imran Latif",
    bookingDateTime: new Date("2025-06-09T15:45:00Z"),
    status: "PENDING",
    notes: "Fix electric board.",
    serviceAddress: "Street 12, Rawalpindi",
  },
  {
    userName: "Rabia Yousuf",
    bookingDateTime: new Date("2025-06-10T10:00:00Z"),
    status: "PENDING",
    notes: "Gas stove installation.",
    serviceAddress: "North Nazimabad, Karachi",
  },
];

export default function ServicesRequests() {
  const [opened, { open, close }] = useDisclosure();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "yellow";
      case "CONFIRMED":
        return "blue";
      case "COMPLETED":
        return "green";
      case "CANCELLED":
        return "red";
      default:
        return "gray";
    }
  };
  const rows = bookings.map((b) => (
    <Table.Tr key={`${b.userName}-${b.bookingDateTime.toISOString()}`}>
      <Table.Td>{b.userName}</Table.Td>

      <Table.Td>{new Date(b.bookingDateTime).toLocaleString()}</Table.Td>
      <Table.Td>{b.notes || "-"}</Table.Td>
      <Table.Td>{b.serviceAddress}</Table.Td>
      <Table.Td>
        <Badge color={getStatusColor(b.status)}>{b.status}</Badge>
      </Table.Td>
      <Table.Td>
        <Menu shadow="md" width={160}>
          <Menu.Target>
            <ActionIcon variant="light" color="gray" size="lg">
              <IconDots size={18} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
            onClick={()=>open()}
            >
              Approve
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Container fluid>
        <Stack>
          <Title order={2}>Services Requests</Title>
          <ScrollArea>
            <Table
              striped
              highlightOnHover
              withTableBorder
              styles={{
                thead: {
                  backgroundColor: "#40c057ff",
                  color: "white",
                  height: 50,
                },
              }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Date & Time</Table.Th>
                  <Table.Th>Notes</Table.Th>
                  <Table.Th>Address</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </ScrollArea>
        </Stack>
      </Container>

      <Modal
        opened={opened}
        onClose={close}
        title="Professional Key"
        centered
      >
        <form>
          <Stack>

     
          <TextInput
        
            placeholder="Enter key of Professional "
            required
          />
      
            <Button type="submit">Submit</Button>
           </Stack>
        </form>
      </Modal>
    </>
  );
}
