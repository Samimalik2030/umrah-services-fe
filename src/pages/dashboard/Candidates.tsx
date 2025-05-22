import { useState } from "react";
import {
  Table,
  Avatar,
  Text,
  Group,
  Badge,
  ScrollArea,
  Box,
  Skeleton,
  Stack,
  ActionIcon,
  Menu,
  Modal,
} from "@mantine/core";
import useGetApplications from "../../hooks/useGetApplications";
import IconDots from "../../assets/icons/IconDots";
import IconCamera from "../../assets/icons/IconCamera";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Application, Candidate } from "../../http/Api";
import CandidateProfileCard from "../components/CandidateDetails";

export enum ApplicationStatus {
  DATA_VERIFICATION = "Data Verification",
  PHYSICAL_TEST = "Physical Test",
  RUNNING = "Running",
  WRITTEN_TEST = "Written Test",
  INTERVIEW = "Interview",
  Rejected = "Rejected",
  SELECTED = "Selected",
}

export default function Candidates() {
  const [candidate, setCandidate] = useState<Candidate | undefined>(undefined);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const { applications, isLoading: loadingApplications } = useGetApplications()

  const [
    openedDetailsModal,
    { open: openDetailModal, close: closeDetailModal },
  ] = useDisclosure();

  const handleCloseDetailsModal = () => {
    setCandidate(undefined);
    closeDetailModal();
  };
  const handleShowDetails = (job: Application) => {
    setCandidate(job?.candidate);
    openDetailModal();
  };




  if (loadingApplications) {
    return (
      <Stack>
        <Skeleton height={50} circle animate />
        <Skeleton height={50} animate />
        <Skeleton height={50} animate />
      </Stack>
    );
  }

  const rows = applications?.map((app) => (
    <Table.Tr key={app._id}>
      <Table.Td>
        <Group>
          <Avatar
            src={app?.candidate?.user?.profileImage?.url}
            radius="xl"
            size="md"
          />
          <div>
            <Text fw={500}>{app?.candidate?.user?.fullName}</Text>
            <Text size="xs" c="dimmed">
              {app?.candidate?.cnic}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text>{app?.candidate?.father_name}</Text>
      </Table.Td>
      <Table.Td>
        <Text>{app?.candidate?.gender}</Text>
      </Table.Td>
      <Table.Td>
        <Text>{`${"Punjab"} / ${app?.candidate?.district}`}</Text>
      </Table.Td>
      <Table.Td>
        <Text>{app?.candidate?.contact?.phone}</Text>
      </Table.Td>
      <Table.Td>
        <Text>{app?.candidate?.education?.intermediate?.marks_percentage}</Text>
      </Table.Td>
      <Table.Td>
        <Text>{app?.candidate?.physical_info?.height_cm} cm</Text>
      </Table.Td>
      <Table.Td>
        <Text>{app?.job?.title}</Text>
      </Table.Td>
      <Table.Td>
        <Badge variant="light">{app?.status}</Badge>
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
              leftSection={<IconCamera size={16} />}
              onClick={() => handleShowDetails(app)}
            >
              Details
            </Menu.Item>
           
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Box>
        <ScrollArea>
          <Table striped highlightOnHover>
            <Table.Thead
              styles={{
                thead: {
                  backgroundColor: "#40c057ff",
                  color: "white",
                  height: 50,
                },
              }}
            >
              <Table.Tr>
                <Table.Th>Candidate</Table.Th>
                <Table.Th>Father's Name</Table.Th>
                <Table.Th>Gender</Table.Th>
                <Table.Th>Province / District</Table.Th>
                <Table.Th>Phone</Table.Th>
                <Table.Th>Education</Table.Th>
                <Table.Th>Height</Table.Th>
                <Table.Th>Applied Post</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {rows?.length > 0 ? (
                rows
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={9}>
                    <Text c="dimmed" ta="center">
                      No candidates found.
                    </Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Box>

      <Modal
        opened={openedDetailsModal}
        onClose={handleCloseDetailsModal}
        title="Candidate Details"
        size={isSmallScreen ? "100%" : "70%"}
        centered
      >
        {candidate && <CandidateProfileCard candidate={candidate} />}
      </Modal>
    </>
  );
}
