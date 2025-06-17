import {
  Card,
  Image,
  Flex,
  Stack,
  Title,
  Text,
  Container,
  SimpleGrid,
  BackgroundImage,
  Box,
  Button,
  Grid,
  Group,
  Textarea,
  TextInput,
  ActionIcon,
  CheckIcon,
} from "@mantine/core";
// import image20 from '../../assets/images/img-20.avif'
import image17 from "../../assets/images/img-17.avif";
import image18 from "../../assets/images/img-18.avif";
import image19 from "../../assets/images/img-19.avif";
import Navbar from "./Navbar";

function CustomPackages() {
  return (
    <>
    <Navbar/>
      <Container w={"100vw"} bg={"#1a237e"} fluid py={80}>
        <Stack gap={130}>
          <Stack>
            <Title fz={62} fw={600} ta={"center"} c={"white"}>
              Custom Travel Packages
            </Title>

            <Flex justify={"center"}>
              <Text fz={18} w={"45%"} fw={500} ta={"center"} c={"white"}>
                Create your unique travel experience with our tailored Umrah and
                worldwide travel packages.
              </Text>
            </Flex>
          </Stack>

          <Card bg={"transparent"} px={60}>
            <Stack gap={60}>
              <Stack gap={25}>
                <Title fz={46} fw={600} ta={"center"} c={"white"}>
                  Custom Travel Packages
                </Title>
                <Flex justify={"center"}>
                  <Text fz={16} fw={500} w={"48%"} ta={"center"} c={"white"}>
                    Tailored travel experiences to suit your unique preferences
                    and needs for unforgettable journeys.
                  </Text>
                </Flex>
              </Stack>

              <SimpleGrid cols={3} spacing={20}>
                <Card
                  radius={20}
                  h={470}
                  p={0}
                  style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <BackgroundImage
                    radius={"md"}
                    src={image17}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      objectFit: "cover",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Stack gap={10} px={40} py={30}>
                    <Title order={4} fw={700}>
                      Personalized Umrah Services
                    </Title>
                    <Text size="md" c={"#6f737a"}>
                      Craft your ideal Umrah journey with our customizable
                      packages designed just for you.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  h={470}
                  p={0}
                  radius={20}
                  style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <BackgroundImage
                    src={image18}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      objectFit: "cover",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Stack gap={10} px={40} py={30}>
                    <Title order={4} fw={700}>
                      Global Travel Option
                    </Title>
                    <Text size="md" c={"#6f737a"}>
                      Explore diverse destinations worldwide with our specially
                      curated travel packages for every traveler.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  h={470}
                  p={0}
                  radius={20}
                  style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <BackgroundImage
                    src={image19}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      objectFit: "cover",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Stack gap={10} px={40} py={30}>
                    <Title order={4} fw={700}>
                      Tailored Adventure Packages
                    </Title>
                    <Text size="md" c={"#6f737a"}>
                      Experience unique adventures tailored to your interests
                      and preferences for a memorable trip.
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </Card>
        </Stack>
      </Container>

      <Card px={80} py={60}>
        <Grid>
          <Grid.Col span={6}>
            <Stack gap={15}>
              <Title fz={46} fw={600} w={"70%"}>
                Custom Travel Packages Inquiry
              </Title>
              <Text c="dimmed" w={"88%"}>
                Contact us to create your personalized travel experience with
                our custom Umrah and worldwide packages tailored just for you.
              </Text>
              <Box>
                <Text fw={700}>Connect</Text>
                <Text c={"dimmed"}>1234567890</Text>
              </Box>

              <Box>
                <Text fw={700}>Support</Text>
                <Text c={"dimmed"}>info@zaroorat.com</Text>
              </Box>
            </Stack>
          </Grid.Col>

          <Grid.Col span={6} style={{ gap: 10 }} w={""} px={30}>
            <Stack gap={20}>
              <TextInput
                label="Your First Name"
                placeholder="Enter your first name"
                size="lg"
              />
              <TextInput
                label="Your Email Address*"
                placeholder="Enter your email address"
                size="lg"
              />
              <Textarea
                label="Your Message*"
                placeholder="Type your message here"
                rows={3}
              />
              <Group>
                <Button
                  radius={35}
                  fz={14}
                  fw={600}
                  h={52}
                  w={240}
                  bg={"#3949ab"}
                >
                  Submit Your Inquiry
                </Button>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Card>

      <Card bg={"#1a237e"} px={55} py={40} radius={0}>
        <Flex justify={"space-between"} gap="xl" pt={20}>
          <Stack gap="xs">
            <Text fz={22} fw={700} c={"white"}>
              Travel
            </Text>
            <Text size="sm" c={"white"} w={"80%"}>
              Explore Umrah and global travel packages with us.
            </Text>
            <Group gap="md" mt="md">
              <ActionIcon size="lg" radius={25} bg={"red"}>
                <CheckIcon size={24} />
              </ActionIcon>
              <ActionIcon size="lg" radius={25} bg={"red"}>
                <CheckIcon size={24} />
              </ActionIcon>
              <ActionIcon size="lg" radius={25} bg={"red"}>
                <CheckIcon size={24} />
              </ActionIcon>
              <ActionIcon size="lg" radius={25} bg={"red"}>
                <CheckIcon size={24} />
              </ActionIcon>
            </Group>
          </Stack>

          <Flex gap={80} w={"50%"}>
            <Stack gap={15}>
              <Text fz={16} fw={700} c={"white"}>
                PACKAGES
              </Text>
              <Box>
                <Text fz={16} c={"white"}>
                  +1234567890
                </Text>
                <Text fz={16} c={"white"}>
                  info@zaroorat.com
                </Text>
              </Box>
            </Stack>

            <Stack gap={15} w={"100%"}>
              <Text c={"white"} size="md" fw={700}>
                SERVICES
              </Text>

              <TextInput
                placeholder="Your email for updates"
                radius="md"
                label="Enter your email address"
                size="lg"
                c={"white"}
              />
              <Button
                variant="filled"
                fz={14}
                fw={500}
                radius={30}
                bg={"#3949ab"}
                w={260}
                h={54}
              >
                Submit your travel inquiry
              </Button>
            </Stack>
          </Flex>
        </Flex>
        <Text size="sm" mt={30} c={"white"}>
          © 2025. All rights reserved.
        </Text>
      </Card>
    </>
  );
}

export default CustomPackages;
