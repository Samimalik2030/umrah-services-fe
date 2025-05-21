import {
  Card,
  Text,
  Flex,
  Title,
  Button,
  Image,
  Container,
  Stack,
  SimpleGrid,
  Box,
  Accordion,
  Group,
  ActionIcon,
  Badge,
  Divider,
  Grid,
  Menu,
  ThemeIcon,
  Tooltip,
  Modal,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import MyNavbar from "../auth/Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import useGetJobs from "../../hooks/useGetJobs";
import IconBook from "../../assets/icons/IconBook";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconClock from "../../assets/icons/IconClock";
import IconDots from "../../assets/icons/IconDots";
import IconPencilOutlined from "../../assets/icons/IconPencilOutlined";
import IconTrashOutlined from "../../assets/icons/IconTrashOutlined";
import IconUsersGroup from "../../assets/icons/IconUsersGroup";
import { useState } from "react";
import { Job } from "../../http/Api";
import { JobDetails } from "./JobDetails";

function LandingPage() {
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

  const largeScreen = useMediaQuery("(min-width: 56.25em)");
  const navigate = useNavigate();
  const { jobs } = useGetJobs();
  return (
    <>
      <MyNavbar />
      <Container fluid mt={12}>
        <Flex justify={"center"} align={"center"} h={"100%"}>
          <Box
            w={largeScreen ? "90%" : "100%"}
            bg={"transparent"}
            style={{
              borderRadius: 20,
            }}
          >
            <Flex gap={20} direction={largeScreen ? "row" : "column"}>
              <Card
                w={largeScreen ? "50%" : "100%"}
                h={370}
                bg={"transparent"}
                // bg={"lime"}
              >
                <Title
                  order={2}
                  ta={largeScreen ? "start" : "center"}
                  mb="xs"
                  fw={700}
                >
                  "Join Our Punjab Police Force!"
                </Title>
                <Text
                  color="dimmed"
                  fz={18}
                  ta={largeScreen ? "start" : "center"}
                >
                  We are thrilled that you have chosen to explore a career in
                  law enforcement and are considering joining our dedicated team
                  of officers. At our police department, we strive to make a
                  positive impact on the communities we serve, ensuring safety,
                  upholding justice, and fostering trust. A career in the police
                  force offers a unique opportunity to make a real difference in
                  people's lives every day. As a police officer, you will have
                  the chance to protect and serve your community, maintain law
                  and order, and help create a safer environment for all.
                </Text>
                <Group justify={largeScreen ? "start" : "center"}>
                  <Button mt={12} onClick={()=>navigate('/jobs')}>VIEW JOBS NOW</Button>
                </Group>
              </Card>
              <Card w={largeScreen ? "50%" : "100%"} h={370} bg={"transparent"}>
                <Image
                  src="https://jobs.punjabpolice.gov.pk/images/final.png" // Replace with the actual URL of the police officers image
                  alt="Police Officers"
                  height={350}
                  fit="contain"
                />
              </Card>
            </Flex>
          </Box>
        </Flex>

        <Card p={largeScreen ? 12 : 6} h={"100%"} mt={12}>
          <Stack gap={20}>
            <Stack gap={largeScreen ? 30 : 10}>
              <Text fz={18} fw={700} ta={"center"} c={"#0d6efd"}>
                OUR JOBS
              </Text>
              <Title fw={700} ta={"center"}>
                Current Jobs
              </Title>
              <Text fz={largeScreen ? 20 : 18} fw={600} ta={"center"}>
                Check out the latest jobs in Pakistan Punjab Police
              </Text>
            </Stack>

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
                      <Tooltip
                        label="View more details"
                        position="top"
                        withArrow
                      >
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
        </Card>

        {/* ////////////// */}

        <Card p={largeScreen ? 12 : 5} py={24} mt={24}>
          <Stack gap={20}>
            <Stack gap={largeScreen ? 15 : 15}>
              <Text fz={18} fw={700} ta={"center"} c={"#0d6efd"}>
                QUESTION YOU HAVE
              </Text>
              <Title ta={"center"}>Frequently Asked Questions</Title>
            </Stack>
            <Flex justify={"center"}>
              <Card shadow="sm" radius="md" w={largeScreen ? "80%" : "100%"}>
                <Accordion>
                  <Accordion.Item value="age-limit">
                    <Accordion.Control>
                      What is the age limit for PSA and SSA?
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm" c="dimmed">
                        18-25 Years
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="qualification">
                    <Accordion.Control>
                      What Qualification is required for SSA and PSA?
                    </Accordion.Control>
                    <Accordion.Panel>
                      {/* Add the qualification details here as Text or a List */}
                      <Text size="md" c="dimmed">
                        Intermediate is Mandatory.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="fee">
                    <Accordion.Control>Fee?</Accordion.Control>
                    <Accordion.Panel>
                      <Text size="md" c="dimmed">
                        Depenfds on the post you are applying for. For example,
                        for SSA and PSA, the fee is 500 PKR.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="documents">
                    <Accordion.Control>
                      Which Documents are required?
                    </Accordion.Control>
                    <Accordion.Panel>
                      {/* Add the list of required documents here as Text or a List */}
                      <Text size="md" c="dimmed">
                        Origianl CNIC , Matric Certificate , Intermediate
                        Certificate , .
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="noc">
                    <Accordion.Control>NOC ?</Accordion.Control>
                    <Accordion.Panel>
                      <Text size="md" c="dimmed">
                        NOC required in case already in Goverment Job.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="submit-fee">
                    <Accordion.Control>
                      Where i can Submit Fee?
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="md" c="dimmed">
                        You can submit your fee online in Bank Accout #
                        xxxxxxxxxx.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </Flex>
          </Stack>
        </Card>
      </Container>
      <Box mt={24}>
        <Footer />
      </Box>

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

export default LandingPage;
