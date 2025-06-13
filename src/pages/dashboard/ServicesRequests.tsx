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
  Modal,
  TextInput,
} from "@mantine/core";
import IconDots from "../../assets/icons/IconDots";
import { useDisclosure } from "@mantine/hooks";
import useGetBookings from "../../hooks/useGetBookings";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import http from "../../http";
import { useState } from "react";
import { notifications } from "@mantine/notifications";

export default function ServicesRequests() {
  const [bookingId, setBookingId] = useState<string>("");

  const { bookings, isLoading } = useGetBookings();
  const [opened, { open, close }] = useDisclosure();
  console.log(bookings);

  const form = useForm({
    initialValues: {
      professionalId: "",
    },
  });

  const rows = bookings?.map((b, ind) => (
    <Table.Tr key={ind}>
      <Table.Td>{b.user?.fullName}</Table.Td>

      <Table.Td>{new Date(b.date).toLocaleString()}</Table.Td>
      <Table.Td>{b.time}</Table.Td>

      <Table.Td>{b.description || "-"}</Table.Td>
      <Table.Td>{b.address}</Table.Td>
      <Table.Td>
        <Badge>{b.status}</Badge>
      </Table.Td>
      <Table.Td>
        <Menu shadow="md" width={160}>
          <Menu.Target>
            <ActionIcon variant="light" color="gray" size="lg">
              <IconDots size={18} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item onClick={() => handleOpenModal(b._id)}>
              Approve
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  const handleOpenModal = (id: string) => {
    setBookingId(id);
    open();
  };
  const handleCloseModal = () => {
    setBookingId("");
    close();
  };

  const { mutate: patchProfessional, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      http.bookings.bookingControllerUpdateProfessional(id, data),
    onSuccess: () => {
      notifications.show({
        message: "Service details sent to the professional",
      });
      handleCloseModal();
    },
  });

  const handleSubmit = () => {
    patchProfessional({
      id: bookingId,
      data: {
        professionalId: form.values.professionalId,
      },
    });
  };
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
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Time</Table.Th>

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
        onClose={handleCloseModal}
        title="Professional Key"
        centered
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              placeholder="Enter key of Professional "
              required
              {...form.getInputProps("professionalId")}
            />

            <Button type="submit" loading={loadingUpdate}>Submit</Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
}
