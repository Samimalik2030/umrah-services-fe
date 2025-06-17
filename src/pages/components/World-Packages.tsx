import {
  BackgroundImage,
  Card,
  Center,
  Image,
  Flex,
  Stack,
  Title,
  Text,
  Overlay,
  Container,
  Group,
  Rating,
  SimpleGrid,
  ActionIcon,
  Box,
  Button,
  CheckIcon,
  TextInput,
} from "@mantine/core";
import image20 from "../../assets/images/img-20.avif";
import image12 from "../../assets/images/img-12.avif";
import image14 from "../../assets/images/img-14.avif";
import { useNavigate } from "react-router-dom";
function WorldPackages() {
  const navigate = useNavigate();
  return (
    <>
      <Card shadow="none" padding={0} radius={0} h={300} w={"100vw"}>
        <BackgroundImage
          src={image20}
          style={{ objectFit: "fill" }}
          radius={0}
          h="100%"
          w="100%"
        >
          <Overlay opacity={0.7} color="#000" zIndex={1} />
          <Center
            h={"100%"}
            c={"white"}
            style={{
              flexDirection: "column",
            }}
          >
            <Stack>
              <Title fz={62} fw={600} ta={"center"}>
                Explore the World
              </Title>
              <Flex justify={"center"}>
                <Text fz={16} w={"70%"} fw={600} ta={"center"}>
                  Discover amazing travel packages tailored for your adventures
                  around the globe with Zaroorat.
                </Text>
              </Flex>
            </Stack>
          </Center>
        </BackgroundImage>
      </Card>

      <Container fluid bg={"transparent"} px={60} py={70}>
        <Stack gap={40}>
          <Stack>
            <Title fz={48} fw={600} ta={"center"}>
              Customer Reviews
            </Title>
            <Flex justify={"center"}>
              <Text fz={16} fw={500} w={"30%"} ta={"center"} c={"#6f737a"}>
                See what our clients say about our Umrah services.
              </Text>
            </Flex>
          </Stack>

          <SimpleGrid cols={2} spacing={20}>
            <Card bg={"#e3f2fd"} shadow="none" px={40} py={30} radius={2}>
              <Stack gap={40}>
                <Stack gap={25}>
                  <Rating defaultValue={5} readOnly size="sm" color="black" />
                  <Text fz={16} fw={500} mb="lg" c={"#6f737a"}>
                    Zaroorat provided an amazing travel experience! The built-in
                    packages are well-organized and affordable. I loved every
                    moment of my trip around the world.
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
                      Sara Lee
                    </Text>
                    <Text size="md" fw={500} color="dimmed">
                      New York
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Card>

            <Card bg={"#e3f2fd"} shadow="none" px={40} py={30} radius={2}>
              <Stack gap={55}>
                <Stack gap={25}>
                  <Rating defaultValue={5} readOnly size="sm" color="black" />
                  <Text fz={16} fw={500} mb="lg" w={"80%"} c={"#6f737a"}>
                    The custom package for Umrah was perfect! Highly recommend
                    Zaroorat for travel.
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
                      Ali Khan
                    </Text>
                    <Text size="md" fw={500} color="dimmed">
                      Mecca City
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
                onClick={() => navigate("/custom-packages")}
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

export default WorldPackages;
