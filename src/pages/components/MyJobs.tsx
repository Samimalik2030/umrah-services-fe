import {
  Badge,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Stack,
  ThemeIcon,
  Title,
  Tooltip,
  Text,
  Container,
  Box,
  Modal,
  Skeleton,
} from "@mantine/core";
import useGetJobs from "../../hooks/useGetJobs";
import IconBook from "../../assets/icons/IconBook";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconClock from "../../assets/icons/IconClock";
import IconUsersGroup from "../../assets/icons/IconUsersGroup";
import MyNavbar from "../auth/Navbar";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Job } from "../../http/Api";
import { useState } from "react";
import { JobDetails } from "./JobDetails";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useGetCandidate } from "../../hooks/useGetCandidate";
import { useMutation } from "@tanstack/react-query";
import http from "../../http";
import { showNotification } from "@mantine/notifications";
import useGetApplications from "../../hooks/useGetApplications";
import useGetCandidateApplications from "../../hooks/useGetCandidateApplications";

export default function MyJobs() {
  const { user } = useAuth();
  const { candidate, isLoading } = useGetCandidate(user?._id);

  const [job, setJob] = useState<Job | undefined>(undefined);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const [
    openedDetailsModal,
    { open: openDetailModal, close: closeDetailModal },
  ] = useDisclosure();

  const handleCloseDetailsModal = () => {
    setJob(undefined);
    closeDetailModal();
  };
  const handleShowDetails = (job: Job) => {
    setJob(job);
    openDetailModal();
  };

  const { candidateApplications, isLoading: ApplicationsLoading } =
    useGetCandidateApplications(candidate?._id);

  if (isLoading || ApplicationsLoading) {
    return (
      <Stack>
        <Skeleton height={50} circle animate />
        <Skeleton height={50} animate />
        <Skeleton height={50} animate />
      </Stack>
    );
  }
  return (
    <>
      <MyNavbar />

      <Container fluid p={"xl"}>
        <Stack>
          <Box mt={14}>
            <Title>Jobs List</Title>

            <Text c={"dimmed"}>Here is list of all applied jobs</Text>
          </Box>
          <Grid>
            {candidateApplications?.map((app) => (
              <Grid.Col
                span={{
                  base: 12,
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 4,
                  xl: 4,
                }}
              >
                <Card
                  shadow="md"
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{ maxWidth: 600, margin: "auto" }}
                >
                  <Group justify="flex-end" mb="sm">
                    <span>Current Status:</span>
                    <Badge color="cyan" variant="light" size="lg">
                      {app?.status}
                    </Badge>
                  </Group>
                  <Text fw={700} size="xl">
                    {app?.job?.title}
                  </Text>

                  <Text c="dimmed" size="sm" mb="md" lineClamp={4}>
                    {app?.job.description}
                  </Text>

                  <Divider my="sm" />

                  <Stack gap="xs" mb="md">
                    <Group gap="xs">
                      <ThemeIcon color="blue" variant="light" size={28}>
                        <IconUsersGroup size={18} />
                      </ThemeIcon>
                      <Text>
                        <strong>Vacancies:</strong> {app?.job?.vacancies}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <ThemeIcon color="orange" variant="light" size={28}>
                        <IconBook size={18} />
                      </ThemeIcon>
                      <Text>
                        <strong>Education:</strong> {app?.job.education}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <ThemeIcon color="red" variant="light" size={28}>
                        <Text style={{ fontFamily: "cursive" }}>Rs</Text>
                      </ThemeIcon>
                      <Text>
                        <strong>Application Fee:</strong> PKR{" "}
                        {app?.job?.application_fee}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <ThemeIcon color="green" variant="light" size={28}>
                        <IconCalendar size={18} />
                      </ThemeIcon>
                      <Text>
                        <strong>Application Deadline:</strong>{" "}
                        {app?.job.application_deadline
                          ? new Date(
                              app?.job.application_deadline
                            ).toLocaleDateString()
                          : "N/A"}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <ThemeIcon color="orange" variant="light" size={28}>
                        <IconClock size={18} />
                      </ThemeIcon>
                      <Text>
                        <strong>Age Limit:</strong> {app?.job.age_min} -{" "}
                        {app?.job.age_max} years
                      </Text>
                    </Group>
                  </Stack>

                  <Divider my="xs" />

                  <Group justify="right" mt="md" gap="sm">
                    <Tooltip label="View more details" position="top" withArrow>
                      <Button
                        variant="outline"
                        onClick={() => handleShowDetails(app?.job)}
                      >
                        Details
                      </Button>
                    </Tooltip>
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>

      <Modal
        opened={openedDetailsModal}
        onClose={handleCloseDetailsModal}
        title="Job Details"
        size={isSmallScreen ? "100%" : "70%"}
        centered
      >
        {job && <JobDetails job={job} />}
      </Modal>
    </>
  );
}
