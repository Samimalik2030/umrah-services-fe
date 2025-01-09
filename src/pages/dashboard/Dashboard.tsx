import {
  Card,
  Group,
  LoadingOverlay,
  Stack,
  Table,
  Text,
  Title
} from "@mantine/core";
import useGetInterviews from "../../hooks/useGetInterviews";
import { Interview } from "../../http/Api";

const Dashboard = () => {
  const { interviews, isLoading } = useGetInterviews();
  return (
    <Stack p={"xl"}>
      <LoadingOverlay visible={isLoading} />
      <Title order={3}>Students Applications</Title>
      <Card>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Scheduled Date</Table.Th>
              <Table.Th>Scheduled Time</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {interviews?.others?.map((interview: Interview) => (
              <Table.Tr key={interview.id}>
                <Table.Td>{interview.student.user.fullName}</Table.Td>
                <Table.Td>{interview.student.user.email}</Table.Td>
                <Table.Td>{interview.status}</Table.Td>
                <Table.Td>
                  {new Date(interview.date).toLocaleDateString("en-US")}
                </Table.Td>
                <Table.Td>
                  {new Date(interview.time).toLocaleTimeString()}
                </Table.Td>
                <Table.Td>
                  <Group align="center" gap={3}>
                    <Text c={"blue"}>Change Status</Text>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>
    </Stack>
  );
};

export default Dashboard;
