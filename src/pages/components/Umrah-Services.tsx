import {
  BackgroundImage,
  Card,
  Center,
  Flex,
  Stack,
  Text,
  Title,
  Image,
  Container,
  SimpleGrid,
  Group,
  Rating,
  ActionIcon,
  Box,
  Button,
  CheckIcon,
  TextInput,
} from "@mantine/core";
import image11 from "../../assets/images/img-11.avif";
import image12 from "../../assets/images/img-12.avif";
import image13 from "../../assets/images/img-13.avif";
import image14 from "../../assets/images/img-14.avif";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

// import Navbar from "./Navbar";

function UmrahServices() {
  const navigate = useNavigate()
  return (
    <>
     <Navbar/>
      <Card shadow="none" padding={0} radius={0} h={300} w={"100vw"}>
        <BackgroundImage src={image11} radius={0} h="100%" w="100%">
          <Center
            h={"100%"}
            c={"white"}
            style={{
              flexDirection: "column",
            }}
          >
            <Stack>
              <Title fz={58} fw={600} ta={"center"}>
                Umrah Services
              </Title>
              <Flex justify={"center"}>
                <Text fz={16} w={"65%"} ta={"center"}>
                  Explore our custom and built-in Umrah packages tailored to
                  your spiritual journey and travel needs.
                </Text>
              </Flex>
            </Stack>
          </Center>
        </BackgroundImage>
      </Card>

      <Container fluid bg={"transparent"} px={60} py={70}>
        <Stack gap={60}>
          <Stack>
            <Title fz={48} fw={600} ta={"center"}>
              Umrah Services Offered
            </Title>
            <Flex justify={"center"}>
              <Text fz={16} fw={500} w={"48%"} ta={"center"}>
                Explore customized and built-in Umrah packages tailored to
                fulfill your spiritual journey needs.
              </Text>
            </Flex>
          </Stack>

          <SimpleGrid cols={2} spacing={20}>
            <Card bg={"#e3f2fd"} h={520} p={0} radius={3}>
              <Stack gap={10} px={50} py={50}>
                <Title order={3} fw={600}>
                  Built-In Packages
                </Title>
                <Text size="md" w={"90%"} c={"#6f737a"}>
                  Choose from our pre-designed Umrah packages that offer
                  convenience and spiritual fulfillment for travelers.
                </Text>
              </Stack>
              <Image
                src={image12}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
            </Card>

            <Card bg={"#e3f2fd"} h={520} p={0} radius={3}>
              <Stack gap={10} px={50} py={50}>
                <Title order={3} fw={600}>
                  Custom Umrah Packages
                </Title>
                <Text size="md" w={"90%"} c={"#6f737a"}>
                  Choose from our pre-designed Umrah packages that offer
                  convenience and spiritual fulfillment for travelers.
                </Text>
              </Stack>
              <Image
                src={image13}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

      <Container fluid bg={"transparent"} px={60} py={70}>
        <Stack gap={40}>
          <Stack>
            <Title fz={48} fw={600} ta={"center"}>
              Customer Reviews
            </Title>
            <Flex justify={"center"}>
              <Text fz={16} fw={500} w={"30%"} ta={"center"}>
                See what our clients say about our Umrah services.
              </Text>
            </Flex>
          </Stack>

          <SimpleGrid cols={2} spacing={20}>
            <Card
              bg={"#e3f2fd"}
              shadow="none"
              px={40}
              py={40}
              padding="xl"
              radius={2}
            >
              <Stack gap={40}>
                <Stack gap={25}>
                  <Rating defaultValue={5} readOnly size="sm" color="black" />
                  <Text fz={18} fw={500} mb="lg" c={"#6f737a"}>
                    Zaroorat provided exceptional service for my Umrah trip.
                    Truly a memorable experience!
                  </Text>
                </Stack>

                <Group align="center">
                  <Image
                    src={image12}
                    style={{ overflow: "hidden", objectFit: "cover" }}
                    w={50}
                    h={50}
                    radius="xl"
                  />
                  <Stack gap={2}>
                    <Text size="md" fw={700}>
                      Aisha Khan
                    </Text>
                    <Text size="sm" fw={600} color="dimmed">
                      Mecca City
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Card>

            <Card bg={"#e3f2fd"} shadow="none" px={40} py={40} radius={2}>
              <Stack gap={40}>
                <Stack gap={25}>
                  <Rating defaultValue={5} readOnly size="sm" color="black" />
                  <Text fz={18} fw={500} mb="lg" c={"#6f737a"}>
                    The custom packages made my Umrah experience unforgettable.
                    Highly recommend Zaroorat!
                  </Text>
                </Stack>

                <Group align="center">
                  <Image
                    src={image14}
                    style={{ overflow: "hidden", objectFit: "cover" }}
                    w={50}
                    h={50}
                    radius="xl"
                  />
                  <Stack gap={2}>
                    <Text size="md" fw={700}>
                      Ali Ahmed
                    </Text>
                    <Text size="sm" fw={600} color="dimmed">
                      Medina City
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

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
                onClick={() => navigate("/world-packages")}
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

export default UmrahServices;
