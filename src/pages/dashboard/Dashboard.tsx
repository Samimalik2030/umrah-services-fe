import {
  Button,
  Container,
  Group,
  Stack,
  Title,
  useMantineTheme,
  Modal,
  Badge,
  Card,
  Divider,
  ThemeIcon,
  Tooltip,
  Text,
  Skeleton,
  Grid,
  ActionIcon,
  Menu,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import JobPostForm from "../components/JobPostingForm";
import IconBook from "../../assets/icons/IconBook";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconClock from "../../assets/icons/IconClock";
import IconUsersGroup from "../../assets/icons/IconUsersGroup";
import { useState } from "react";
import useGetJobs from "../../hooks/useGetJobs";
import { Job } from "../../http/Api";
import { JobDetails } from "../components/JobDetails";
import IconDots from "../../assets/icons/IconDots";
import IconPencilOutlined from "../../assets/icons/IconPencilOutlined";
import IconTrashOutlined from "../../assets/icons/IconTrashOutlined";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { showNotification } from "@mantine/notifications";

const Dashboard = () => {
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [job, setJob] = useState<Job | undefined>(undefined);
  const queryClient = useQueryClient();

  const [opened, { open, close }] = useDisclosure();

  const [
    openedDetailsModal,
    { open: openDetailModal, close: closeDetailModal },
  ] = useDisclosure();

  const { isLoading, jobs } = useGetJobs();

  const handleCloseDetailsModal = () => {
    setJob(undefined);
    closeDetailModal();
  };
  const handleShowDetails = (job: Job) => {
    setJob(job);
    openDetailModal();
  };

  const handleOpenJobModal = (job?: Job) => {
    if (job) {
      setJob(job);
    }
    open();
  };
  const { mutate: deleteJob, isPending: loadingDelete } = useMutation({
    mutationFn: http.jobs.jobsControllerRemove,
  });

  const handleDeleteJob = (id: string) => {
    deleteJob(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["jobs"] });

        showNotification({
          message: "'Job Deleted'",
        });
      },
    });
  };

  if (isLoading) {
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
      <Container fluid>
        <Stack>
          <Group justify="space-between" align="center">
            <Title order={2}>Jobs</Title>
            <Button
              color={theme.colors.dark[9]}
              onClick={() => handleOpenJobModal()}
            >
              Post Job
            </Button>
          </Group>
          <Grid>
            {jobs?.map((job) => (
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
                    <Badge color="cyan" variant="light" size="lg">
                      BPS-{job.bps}
                    </Badge>
                    <Menu shadow="md" width={160}>
                      <Menu.Target>
                        <ActionIcon variant="light" color="gray" size="lg">
                          <IconDots size={18} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Item
                          leftSection={<IconPencilOutlined size={16} />}
                          onClick={() => handleOpenJobModal(job)}
                        >
                          Edit
                        </Menu.Item>
                        <Menu.Item
                          color="red"
                          leftSection={<IconTrashOutlined size={16} />}
                          onClick={() => handleDeleteJob(job._id)}
                        >
                          Delete
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                  <Text fw={700} size="xl">
                    {job.title}
                  </Text>

                  <Text c="dimmed" size="sm" mb="md" lineClamp={4}>
                    {job.description}
                  </Text>

                  <Divider my="sm" />

                  <Stack gap="xs" mb="md">
                    <Group gap="xs">
                      <ThemeIcon color="blue" variant="light" size={28}>
                        <IconUsersGroup size={18} />
                      </ThemeIcon>
                      <Text>
                        <strong>Vacancies:</strong> {job.vacancies}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <ThemeIcon color="orange" variant="light" size={28}>
                        <IconBook size={18} />
                      </ThemeIcon>
                      <Text>
                        <strong>Education:</strong> {job.education}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <ThemeIcon color="red" variant="light" size={28}>
                        <Text style={{ fontFamily: "cursive" }}>Rs</Text>
                      </ThemeIcon>
                      <Text>
                        <strong>Application Fee:</strong> PKR{" "}
                        {job.application_fee}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <ThemeIcon color="green" variant="light" size={28}>
                        <IconCalendar size={18} />
                      </ThemeIcon>
                      <Text>
                        <strong>Application Deadline:</strong>{" "}
                        {job.application_deadline
                          ? new Date(
                              job.application_deadline
                            ).toLocaleDateString()
                          : "N/A"}
                      </Text>
                    </Group>

                    <Group gap="xs">
                      <ThemeIcon color="orange" variant="light" size={28}>
                        <IconClock size={18} />
                      </ThemeIcon>
                      <Text>
                        <strong>Age Limit:</strong> {job.age_min} -{" "}
                        {job.age_max} years
                      </Text>
                    </Group>
                  </Stack>

                  <Divider my="xs" />

                  {/* <Box
                    style={(theme) => ({
                      backgroundColor: theme.colors.gray[0],
                      padding: 12,
                      borderRadius: theme.radius.sm,
                      maxHeight: 100,
                      overflowY: "auto",
                      whiteSpace: "pre-wrap",
                      fontSize: theme.fontSizes.sm,
                      color: theme.colors.dark[6],
                      position: "relative",
                    })}
                  >
                    <Group mb="xs" gap={4} align="center">
                      <ThemeIcon color="blue" variant="light" size={20}>
                        <IconBell size={14} />
                      </ThemeIcon>
                      <Text fw={600} size="sm">
                        Terms & Conditions
                      </Text>
                    </Group>
                    {job.terms_and_conditions}
                  </Box> */}

                  <Group justify="right" mt="md" gap="sm">
                    {/* <Tooltip label="Apply for this job" position="top" withArrow>
                      <Button>
                        Apply Now
                      </Button>
                    </Tooltip> */}
                    <Tooltip label="View more details" position="top" withArrow>
                      <Button
                        variant="outline"
                        onClick={() => handleShowDetails(job)}
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

      <Modal opened={opened} onClose={close} title="Post a Job" size="lg">
        <JobPostForm onClose={close} job={job} />
      </Modal>

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
};

export default Dashboard;
