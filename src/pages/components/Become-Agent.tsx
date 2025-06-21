import {
  Box,
  Overlay,
  Flex,
  Text,
  Card,
  Stack,
  Title,
  Button,
  Container,
  Grid,
  Image,
  BackgroundImage,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
  ActionIcon,
  CheckIcon,
} from "@mantine/core";
import video1 from "../../assets/images/video-1.mp4";
import image9 from "../../assets/images/img-9.avif";
import image5 from "../../assets/images/img-5.avif";
import image3 from "../../assets/images/img-3.avif";
import image13 from "../../assets/images/img-13.avif";

import { useMediaQuery } from "@mantine/hooks";
function BecomeAgent() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  return (
    <>
      <Box
        pos="relative"
        h={isSmallscreen ? "100%" : "100vh"}
        w="100%"
        style={{ overflow: "hidden" }}
      >
        <video
          src={video1}
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
                  Join Our Agents
                </Title>
              </Flex>
              <Flex justify="center">
                <Text
                  fz={16}
                  w={isSmallscreen ? "90%" : "80%"}
                  ta="center"
                  c="white"
                >
                  Partner with us to offer Umrah packages and earn commissions
                  by bringing in clients.
                </Text>
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
              sm: 12,
              md: 12,
              lg: 6,
              xl: 6,
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
                  fz={isSmallscreen ? 40 : 44}
                  fw={600}
                  w={isSmallscreen ? "100%" : "70%"}
                  ta={isSmallscreen ? "center" : "start"}
                >
                  Join Our Agent Network
                </Title>
                <Text
                  fz={16}
                  w={isSmallscreen ? "100%" : "75%"}
                  c={"#3b5d66"}
                  ta={isSmallscreen ? "center" : "start"}
                >
                  Become a valued partner with Zarorat, connecting clients to
                  exceptional Umrah packages while earning attractive
                  commissions for every successful referral.
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
              sm: 12,
              md: 12,
              lg: 6,
              xl: 6,
            }}
          >
            <Card p={0} radius={20} bg={"transparent"}>
              <Image h={460} src={image9} />
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      <Container
        fluid
        // bg={"#e3f2fd"}
        w={"100vw"}
        h={isSmallscreen ? "130vh" : "90vh"}
        px={isSmallscreen ? 0 : 60}
        py={isSmallscreen ? 10 : 30}
      >
        <Grid >
          <Grid.Col
            // bg={"red"}
            span={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 6,
              xl: 6,
            }}
          >
            <BackgroundImage
              px={30}
              radius={20}
              h={460}
              w={370}
              src={image5}
              pos={"relative"}
            >
              <Image
                src={image3}
                h={"75%"}
                w={"70%"}
                radius={15}
                pos={"absolute"}
                top={65}
                left={320}
                // py={40}
                style={{ objectFit: "cover" }}
              />
            </BackgroundImage>
          </Grid.Col>
          <Grid.Col
            // bg={"blue"}
            span={{
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
              xl: 6,
            }}
          >
            <Flex justify={"center"} align={"center"} h={"100%"}>
              <Stack w={"75%"} gap={90}>
                <Title fz={46} fw={600}>
                  About Our Agents
                </Title>
                <Text fz={16} fw={600} c="dimmed">
                  Our agents play a vital role in bringing clients to our Umrah
                  packages, enjoying commission benefits while providing
                  exceptional service and support.
                </Text>
              </Stack>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>

      <Container fluid w={"100vw"} px={60} py={60}>
        <Stack gap={60}>
          <Stack gap={70}>
            <Title fz={44} fw={700} ta={"center"}>
              Agents Contact Information
            </Title>
            <Flex justify={"center"}>
              <Text fz={16} fw={500} w={"40%"} ta={"center"}>
                Connect with us for commission opportunities and client
                partnerships.
              </Text>
            </Flex>
          </Stack>

          <SimpleGrid cols={2} spacing={0} px={40}>
            <Card bg={"#e3f2fd"} px={50} py={30} radius={20} h={450}>
              <Stack gap={25}>
                <TextInput
                  label="Enter your first name here."
                  placeholder="Enter your first name"
                  radius="md"
                  size="lg"
                />
                <TextInput
                  fz={14}
                  size="lg"
                  label="Provide your email address*"
                  placeholder="Enter your email address"
                  radius="md"
                />
                <Textarea
                  label="Share your message or query*"
                  placeholder="Type your message here"
                  radius="md"
                  rows={3}
                />
                <Group>
                  <Button
                    type="submit"
                    size="sm"
                    h={52}
                    w={300}
                    radius="xl"
                    bg={"#2c6e91"}
                  >
                    Submit Your application now.
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
                  src={image13}
                />
              </Flex>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

      <Card bg={"#1a3b4d"} px={55} py={40} radius={0}>
        <Flex justify={"space-between"} gap="xl" pt={20}>
          <Stack gap={20}>
            <Text fz={22} fw={700} c={"white"}>
              Agents
            </Text>
            <Text size="sm" c={"white"}>
              Join us to earn commissions on packages.
            </Text>
            <Group gap="md" mt={30}>
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
                SUPPORT
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
                CONTACT
              </Text>

              <TextInput
                placeholder="Your email for contact purpose"
                radius="md"
                label="Enter your email address here"
                size="lg"
                c={"white"}
              />
              <Button
                variant="filled"
                fz={14}
                fw={500}
                radius={30}
                bg={"#2c6e91"}
                w={280}
                h={52}
                // onClick={() => navigate("/umrah-services")}
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

export default BecomeAgent;
