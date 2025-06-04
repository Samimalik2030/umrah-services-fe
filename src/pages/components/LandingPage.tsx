import {
  Anchor,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Stack,
  Title,
  Text,
  Image,
  SimpleGrid,
  Box,
  Select,
  Avatar,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Role } from "../../interfaces/ICommonIconProps";

export default function LandingPage() {
  const aboutRef = useRef<HTMLDivElement>(null);


  const { user } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      city: "",
    },
  });

  const handleSubmit = () => {
    navigate("/city", {
      state: {
        ...form.values,
      },
    });
  };

  return (
    <>
      <Container fluid p={0}>
        <Stack gap={60}>
          <Card bg={"#40c057ff"} h={"96vh"} radius={0}>
            <Card bg={"transparent"}>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={50}>
                  <Group>
                    <Anchor c={"white"}>Logo</Anchor>
                  </Group>
                  <Flex gap={30}>
                    <Anchor
                      c={"white"}
                      onClick={() => {
                        const aboutSection =
                          document.getElementById("services");
                        aboutSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      OUR SERVICES
                    </Anchor>
                    <Anchor
                      c={"white"}
                      onClick={() => {
                        const aboutSection =
                          document.getElementById("about-us");
                        aboutSection?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      ABOUT US
                    </Anchor>
                  </Flex>
                </Flex>
                <Flex gap={10}>
                  {user ? (
                    <Group>
                      <Button
                        variant="outline"
                        color="white"
                        onClick={() => {
                          if (user?.role === Role.ADMIN) {
                            return <Navigate to="/dashboard" />;
                          } else if (user?.role === Role.CITY_MANAGER) {
                            return <Navigate to="/dashboard/city-salesmans" />;
                          } else if (user?.role === Role.SALESMAN) {
                            return <Navigate to="/dashboard/professionals" />;
                          } else {
                            return <Navigate to="/" />;
                          }
                        }}
                      >
                        Dashboard
                      </Button>
                      <Avatar
                        color="white"
                        size={"md"}
                        src={user.profileImage?.url}
                      />
                    </Group>
                  ) : (
                    <Button
                      onClick={() => navigate("/auth/sign-in")}
                      bg={"#309945"}
                      c={"white"}
                    >
                      Login
                    </Button>
                  )}

                  {!user && (
                    <Button
                      bg={"transparent"}
                      style={{ border: "2px solid white" }}
                      onClick={() => navigate("/auth/sign-up")}
                    >
                      GET STARTED
                    </Button>
                  )}
                </Flex>
              </Flex>
            </Card>
            <Card bg={"transparent"} w={"100%"} mt={40}>
              <Flex gap={10}>
                <Card w={"60%"} bg={"transparent"}>
                  <Stack>
                    <Title c={"white"} fw={700} fz={42}>
                      Book trusted service professionals near you, without
                      hassle
                    </Title>
                    <Text fw={600} fz={16} c={"white"}>
                      Find reliable electricians, plumbers, mechanics, and more
                      — our team connects you with verified experts in your
                      city.
                    </Text>

                    <Card radius={"100px"} w={"75%"} bg={"#66d07a"}>
                      <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Flex gap={10}>
                          <Select
                            radius={30}
                            w={"75%"}
                            size="lg"
                            placeholder="Your City"
                            data={[
                              "Multan",
                              "Lahore",
                              "Islamabad",
                              "Karachi",
                              "Rawalpindi",
                              "Faisalabad",
                            ]}
                            {...form.getInputProps("city")}
                          />

                          <Button
                            h={46}
                            w={130}
                            radius={30}
                            fz={16}
                            variant="outline"
                            bg={"#309945"}
                            c={"white"}
                            type="submit"
                          >
                            Search
                          </Button>
                        </Flex>
                      </form>
                    </Card>
                    <Group justify="end"></Group>
                  </Stack>
                </Card>
                <Card w={"40%"} bg={"transparent"}>
                  <Image
                    src={
                      "https://ik.imagekit.io/xf3wbji6t/hero_image_desktop-08e3eaac39db4404c62da49ee7c4cd83.png?updatedAt=1743237928837"
                    }
                  />
                </Card>
              </Flex>
            </Card>
          </Card>

          <Stack gap={30}>
            <Text fz={24} ta={"center"}>
              HOW IT WORKS
            </Text>
            <Title ta={"center"}>
              Book a trusted professional in just a few clicks
            </Title>
            <SimpleGrid cols={3} spacing={20}>
              <Card bg={"transparent"}>
                <Stack>
                  <Flex justify={"center"}>
                    <Box w={"80px"} h={80}>
                      <Image
                        src={
                          "https://ik.imagekit.io/yzrrrgg3d/price-quote-logo.webp?updatedAt=1743590997794"
                        }
                      ></Image>
                    </Box>
                  </Flex>
                  <Title fz={28} ta={"center"}>
                    Get an instant price quote
                  </Title>
                  <Text fz={16} ta={"center"}>
                    Select your city and location, tell us what's wrong, and
                    we'll give you an instant fixed price in seconds
                  </Text>
                </Stack>
              </Card>
              <Card bg={"transparent"}>
                <Stack>
                  <Flex justify={"center"}>
                    <Box w={"80px"} h={80}>
                      <Image
                        src={
                          "https://ik.imagekit.io/yzrrrgg3d/calendar.webp?updatedAt=1743590972836"
                        }
                      />
                    </Box>
                  </Flex>
                  <Title fz={28} ta={"center"}>
                    Pick a date, time & location
                  </Title>
                  <Text fz={16} ta={"center"}>
                    Your professional will come to whichever address suits you
                    best, at the date and time of your choice.
                  </Text>
                </Stack>
              </Card>
              <Card bg={"transparent"}>
                <Stack>
                  <Flex justify={"center"}>
                    <Box w={"80px"} h={80}>
                      <Image
                        src={
                          "https://ik.imagekit.io/yzrrrgg3d/pc.webp?updatedAt=1743590972777"
                        }
                      />
                    </Box>
                  </Flex>
                  <Title fz={28} ta={"center"}>
                    Proffesional comes to you
                  </Title>
                  <Text fz={16} ta={"center"}>
                    No need to go to the garage - once booked just sit back and
                    relax while the professional comes to you.
                  </Text>
                </Stack>
              </Card>
            </SimpleGrid>
            <Flex justify={"center"}>
              <Button
                w={210}
                c={"#40c057ff"}
                fz={16}
                radius={30}
                h={48}
                bg={"transparent"}
                style={{ border: "1px solid #40c057ff" }}
                onClick={() =>
                  navigate("/indexing", {
                    state: {
                      city: "",
                      area: "",
                    },
                  })
                }
              >
                FIND OUT MORE
              </Button>
            </Flex>
          </Stack>
          <div ref={aboutRef} id="about-us">
            <Flex justify={"center"} h={"80vh"}>
              <Card bg={"transparent"} shadow="none" mt={20} w={"90%"}>
                <Flex gap={40}>
                  <Card
                    bg={"transparent"}
                    shadow="none"
                    w={"40%"}
                    p={0}
                    radius={30}
                  >
                    <Image
                      h={450}
                      radius={30}
                      src={
                        "https://ik.imagekit.io/xf3wbji6t/about_us_400x500-e761a4b894fb46451e19937192f37993.jpg?updatedAt=1743242464692"
                      }
                    />
                  </Card>
                  <Card bg={"transparent"} w={"60%"} shadow="none">
                    <Stack>
                      <Stack gap={40}>
                        <Stack gap={15}>
                          <Text fz={18}>ABOUT US</Text>
                          <Title fz={28}>Our promise to you</Title>
                        </Stack>

                        <Stack>
                          <Text fz={16}>
                            Tired of searching for reliable professionals when
                            something breaks at home? We get it! That’s why
                            we’re here — to make hiring electricians, plumbers,
                            and technicians as hassle-free as possible.
                          </Text>
                          <Text fz={16}>
                            Whether it's a leaky tap, faulty wiring, appliance
                            repair, or general maintenance, our booking system
                            connects you with trusted experts in your city. No
                            hidden charges — just fair, upfront rates.
                          </Text>
                          <Text fz={16}>
                            Once you place your request, our team finds the
                            right professional for you. We coordinate
                            everything, so you can relax while the expert comes
                            to your doorstep — no app or tech skills needed!
                          </Text>
                        </Stack>
                      </Stack>

                      {/* <Button
                      w={210}
                      c={"#40c057ff"}
                      fz={16}
                      radius={30}
                      h={48}
                      bg={"transparent"}
                      style={{ border: "1px solid #40c057ff" }}
                    >
                      FIND OUT MORE
                    </Button> */}
                    </Stack>
                  </Card>
                </Flex>
              </Card>
            </Flex>
          </div>

          <div ref={aboutRef} id="services">
            <Card bg={"#f1f6ff"} px={60} py={60} shadow="none">
              <Stack gap={40}>
                <Stack>
                  <Text fz={18} ta={"center"}>
                    OUR SERVICES
                  </Text>
                  <Title ta={"center"} fz={30}>
                    All the ways we can help
                  </Title>
                </Stack>
                <Flex justify={"center"}>
                  <SimpleGrid cols={3} w={"70%"}>
                    <Card radius={15}>
                      <Stack>
                        <Flex justify={"center"}>
                          <Box w={"80px"} h={80}>
                            <Image
                              height={"100%"}
                              style={{
                                objectFit: "contain",
                              }}
                              src={
                                "https://ik.imagekit.io/yzrrrgg3d/icon%20screw.svg?updatedAt=1743593336899"
                              }
                            />
                          </Box>
                        </Flex>
                        <Title ta={"center"} fz={22}>
                          Repairs
                        </Title>
                      </Stack>
                    </Card>
                    <Card radius={15}>
                      <Stack>
                        <Flex justify={"center"}>
                          <Box w={"80px"} h={80}>
                            <Image
                              height={"100%"}
                              style={{
                                objectFit: "contain",
                              }}
                              src={
                                "https://ik.imagekit.io/yzrrrgg3d/icon-diagnostic.svg?updatedAt=1743593336528"
                              }
                            />
                          </Box>
                        </Flex>
                        <Title ta={"center"} fz={22}>
                          Diagnostics
                        </Title>
                      </Stack>
                    </Card>
                    <Card radius={15}>
                      <Stack>
                        <Flex justify={"center"}>
                          <Box w={"80px"} h={80}>
                            <Image
                              height={"100%"}
                              style={{
                                objectFit: "contain",
                              }}
                              src={
                                "https://ik.imagekit.io/yzrrrgg3d/icon-service.svg?updatedAt=1743593387608"
                              }
                            />
                          </Box>
                        </Flex>
                        <Title ta={"center"} fz={22}>
                          servicing
                        </Title>
                      </Stack>
                    </Card>
                    <Card radius={15}>
                      <Stack>
                        <Flex justify={"center"}>
                          <Box w={"80px"} h={80}>
                            <Image
                              height={"100%"}
                              style={{
                                objectFit: "contain",
                              }}
                              src={
                                "https://ik.imagekit.io/yzrrrgg3d/icon-mot.svg?updatedAt=1743593336468"
                              }
                            />
                          </Box>
                        </Flex>
                        <Title ta={"center"} fz={22}>
                          MOT
                        </Title>
                      </Stack>
                    </Card>
                    <Card radius={15}>
                      <Stack>
                        <Flex justify={"center"}>
                          <Box w={"80px"} h={80}>
                            <Image
                              height={"100%"}
                              style={{
                                objectFit: "contain",
                              }}
                              src={
                                "https://ik.imagekit.io/yzrrrgg3d/icon-tyre.svg?updatedAt=1743593336343"
                              }
                            />
                          </Box>
                        </Flex>
                        <Title ta={"center"} fz={22}>
                          Tyres
                        </Title>
                      </Stack>
                    </Card>
                    <Card radius={15}>
                      <Stack>
                        <Flex justify={"center"}>
                          <Box w={"80px"} h={80}>
                            <Image
                              height={"100%"}
                              style={{
                                objectFit: "contain",
                              }}
                              src={
                                "https://ik.imagekit.io/yzrrrgg3d/icon-inspection.svg?updatedAt=1743593387412"
                              }
                            />
                          </Box>
                        </Flex>
                        <Title ta={"center"} fz={22}>
                          Pre-purchase inspection
                        </Title>
                      </Stack>
                    </Card>
                  </SimpleGrid>
                </Flex>
              </Stack>
            </Card>
          </div>
        </Stack>
      </Container>
    </>
  );
}
