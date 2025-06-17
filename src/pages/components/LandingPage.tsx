import {
  Card,
  Flex,
  Title,
  Text,
  Button,
  Stack,
  Overlay,
  Box,
  Container,
  Image,
  Grid,
  BackgroundImage,
  SimpleGrid,
  Group,
  Textarea,
  TextInput,
  ActionIcon,
  CheckIcon,
} from "@mantine/core";

import video from "../../assets/images/video.mp4";
import image1 from "../../assets/images/img-1.avif";
import image2 from "../../assets/images/img-2.avif";
import image3 from "../../assets/images/img-3.avif";
import image4 from "../../assets/images/img-4.avif";
import image5 from "../../assets/images/img-5.avif";
import image6 from "../../assets/images/img-6.avif";
import image7 from "../../assets/images/img-7.avif";
import image8 from "../../assets/images/img-8.avif";
import image9 from "../../assets/images/img-9.avif";
import image10 from "../../assets/images/img-10.avif";
import image11 from "../../assets/images/img-11.avif";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

export default function LandingPage() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <Box
        pos="relative"
        h={isSmallscreen ? "100%" : "100vh"}
        w="100%"
        style={{ overflow: "hidden" }}
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -3,
          }}
        />
        <Overlay color="#000" opacity={0.3} zIndex={0} />
        <Flex justify="center" align="center" h="100%">
          <Card
            w={isSmallscreen ? "100%" : "50%"}
            bg="transparent"
            shadow="none"
          >
            <Stack gap={20}>
              <Flex justify="center">
                <Title
                  fz={isSmallscreen ? 46 : 62}
                  ta="center"
                  fw={isSmallscreen ? 700 : 600}
                  c="white"
                >
                  Explore Your Dream Travel Packages Today
                </Title>
              </Flex>
              <Flex justify="center">
                <Text
                  fz={16}
                  w={isSmallscreen ? "90%" : "80%"}
                  ta="center"
                  c="white"
                >
                  Custom and built-in Umrah packages and global travel
                  experiences await you. Discover now!
                </Text>
              </Flex>
              <Flex
                justify="center"
                gap={isSmallscreen ? 20 : 10}
                wrap={"wrap"}
              >
                <Button
                  variant="outline"
                  w={200}
                  h={55}
                  fz={16}
                  style={{
                    borderRadius: 35,
                    border: "1px solid #e6e4e3",
                  }}
                  c="white"
                >
                  Book
                </Button>
                <Button
                  bg={"transparent"}
                  c="white"
                  w={200}
                  h={55}
                  fz={16}
                  style={{
                    borderRadius: 35,
                  }}
                >
                  Learn
                </Button>
              </Flex>
            </Stack>
          </Card>
        </Flex>
      </Box>

      <Container
        fluid
        w={"100vw"}
        // h={"100vh"}
        px={isSmallscreen ? 10 : 60}
        py={isSmallscreen ? 30 : 70}
      >
        <Grid p={5}>
          <Grid.Col
            span={{
              sm: 6,
              md: 6,
              lg: 4,
              xl: 4,
            }}
          >
            <Card
              p={2}
              h={460}
              radius={20}
              py={isSmallscreen ? 25 : 70}
              px={10}
              bg={"transparent"}
              shadow="none"
            >
              <Stack gap={isSmallscreen ? 20 : 30}>
                <Title
                  fz={isSmallscreen ? 40 : 46}
                  fw={600}
                  w={isSmallscreen ? "100%" : "50%"}
                  ta={isSmallscreen ? "center" : "start"}
                >
                  About Zaroorat
                </Title>
                <Text
                  fz={16}
                  w={isSmallscreen ? "100%" : "95%"}
                  c={"#888888"}
                  ta={isSmallscreen ? "center" : "start"}
                >
                  Your gateway to exceptional Umrah services and global travel
                  packages tailored to your unique needs.
                </Text>
                <Flex justify={isSmallscreen ? "center" : "start"}>
                  <Button
                    variant="outline"
                    w={200}
                    h={55}
                    mt={isSmallscreen ? 30 : 0}
                    fz={16}
                    style={{
                      borderRadius: 35,
                      border: "1px solid ",
                    }}
                    c="black"
                  >
                    Explore
                  </Button>
                </Flex>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col
            span={{
              sm: 6,
              md: 6,
              lg: 4,
              xl: 4,
            }}
          >
            <Card p={0} radius={20} bg={"transparent"}>
              <Image h={460} src={image1} />
            </Card>
          </Grid.Col>
          <Grid.Col
            span={{
              sm: 6,
              md: 6,
              lg: 4,
              xl: 4,
            }}
          >
            <Card p={0} radius={20} bg={"transparent"}>
              <Image h={460} src={image2} />
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      <Stack>
        <Container
          fluid
          bg={"#e3f2fd"}
          w={"100vw"}
          h={isSmallscreen ? "130vh" : "110vh"}
          px={isSmallscreen ? 0 : 60}
          py={isSmallscreen ? 10 : 70}
        >
          <Stack gap={60}>
            <Stack>
              <Title
                fz={isSmallscreen ? 42 : 48}
                fw={600}
                ta={"center"}
                // bg={"red"}
              >
                Travel Services Offered
              </Title>
              <Flex justify={"center"}>
                <Text
                  fz={16}
                  fw={500}
                  w={isSmallscreen ? "90%" : "48%"}
                  ta={"center"}
                >
                  Explore our Umrah services and global travel packages tailored
                  to your needs and preferences.
                </Text>
              </Flex>
            </Stack>
            <Grid>
              <Grid.Col
                span={{
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 6,
                  xl: 12,
                }}
              >
                <BackgroundImage
                  px={30}
                  radius={20}
                  h={300}
                  src={image3}
                  pos={"relative"}
                >
                  <Card
                    h={190}
                    w={"90%"}
                    radius={0}
                    pos={"absolute"}
                    top={225}
                    left={30}
                    py={40}
                  >
                    <Stack gap={13}>
                      <Title fz={20} ta={"center"}>
                        Global Travel Packages
                      </Title>
                      <Flex justify={"center"}>
                        <Text ta={"center"} w={"75%"} fw={500} c={"#727479"}>
                          Discover diverse travel packages that cater to your
                          wanderlust and explore the world with us.
                        </Text>
                      </Flex>
                    </Stack>
                  </Card>
                </BackgroundImage>
              </Grid.Col>
              <Grid.Col
                span={{
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 6,
                  xl: 12,
                }}
              >
                <BackgroundImage
                  px={40}
                  radius={20}
                  h={300}
                  src={image4}
                  pos={"relative"}
                >
                  <Card
                    h={190}
                    w={"90%"}
                    radius={0}
                    pos={"absolute"}
                    top={225}
                    left={30}
                    py={40}
                  >
                    <Stack gap={13}>
                      <Title fz={20} ta={"center"}>
                        Umrah Package Options
                      </Title>
                      <Flex justify={"center"}>
                        <Text ta={"center"} w={"75%"} fw={500} c={"#727479"}>
                          Choose from custom or built-in packages designed to
                          enhance your Umrah experience with ease.
                        </Text>
                      </Flex>
                    </Stack>
                  </Card>
                </BackgroundImage>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>

        <Container fluid bg={"transparent"} px={60} py={70}>
          <Stack gap={60}>
            <Stack>
              <Title fz={48} fw={600} ta={"center"}>
                Gallery
              </Title>
              <Flex justify={"center"}>
                <Text fz={16} fw={500} w={"48%"} ta={"center"}>
                  Explore our travel packages and unforgettable experiences
                  worldwide.
                </Text>
              </Flex>
            </Stack>

            <SimpleGrid cols={2} spacing={20}>
              <Card h={450} p={0}>
                <Image h={"100%"} radius={20} src={image5}></Image>
              </Card>
              <Card h={450} p={0}>
                <Image h={"100%"} radius={20} src={image7}></Image>
              </Card>
              <Card h={450} p={0}>
                <Image h={"100%"} radius={20} src={image8}></Image>
              </Card>
              <Card h={450} p={0}>
                <Image h={"100%"} radius={20} src={image6}></Image>
              </Card>

              <Card h={450} p={0}>
                <Image h={"100%"} radius={20} src={image9}></Image>
              </Card>
              <Card h={450} p={0}>
                <Image h={"100%"} radius={20} src={image10}></Image>
              </Card>
            </SimpleGrid>
          </Stack>
        </Container>

        <Container fluid w={"100vw"} px={60} py={70}>
          <Stack gap={60}>
            <Stack gap={70}>
              <Title fz={48} fw={600} ta={"center"}>
                Get in Touch With Us
              </Title>
              <Flex justify={"center"}>
                <Text fz={16} fw={500} w={"30%"} ta={"center"}>
                  Contact us for personalized Umrah and travel package
                  inquiries.
                </Text>
              </Flex>
            </Stack>

            <SimpleGrid cols={2} spacing={0} px={40}>
              <Card bg={"#e3f2fd"} px={50} py={30} radius={20} h={450}>
                <Stack gap={25}>
                  <TextInput
                    label="Your First Name"
                    placeholder="Enter your first name"
                    radius="md"
                    size="lg"
                  />
                  <TextInput
                    size="lg"
                    label="Your Email Address*"
                    placeholder="Enter your email address"
                    radius="md"
                  />
                  <Textarea
                    label="Your Message*"
                    placeholder="Type your message here"
                    radius="md"
                    rows={3}
                  />
                  <Group>
                    <Button
                      type="submit"
                      size="md"
                      h={52}
                      w={240}
                      radius="xl"
                      bg={"#3949ab"}
                    >
                      Submit Your Inquiry
                    </Button>
                  </Group>
                </Stack>
              </Card>

              <Card h={450} p={0} bg={"transparent"} shadow="none">
                <Flex align={"center"} h={"100%"}>
                  <Image
                    h={"80%"}
                    w={"80%"}
                    style={{
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                    }}
                    src={image11}
                  />
                </Flex>
              </Card>
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>

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
                onClick={() => navigate("/umrah-services")}
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
