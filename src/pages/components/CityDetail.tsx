import {
  Box,
  Card,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Image,
  AspectRatio,
  Grid,
  Group,
} from "@mantine/core";
import MyNavbar from "../auth/Navbar";
import IconSettings from "../../assets/icons/IconSettings";
import { useNavigate } from "react-router-dom";

export default function CityDetails() {
  const navigate = useNavigate();
  const services = [
    {
      title: "AC Repair",
      href: "/ac-services",
      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20repair.webp?updatedAt=1748413681218",
    },
    {
      title: "Electritian",
      href: "/electrician-services",

      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNEEvrV6gH-9nBdvg0zX0TRdjwHC8beAlVQ&s",
    },
    {
      title: "Plumber",
      href: "",

      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/download.png?updatedAt=1748440467975",
    },
    {
      title: "Carpenter",
      href: "",

      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20repair.webp?updatedAt=1748413681218",
    },
    {
      title: "Wall Panels",
      href: "/wallpanel-services",

      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20repair.webp?updatedAt=1748413681218",
    },
    {
      title: "Appliance Repair",
      href: "",

      imageUrl:
        "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20repair.webp?updatedAt=1748413681218",
    },
  ];

  const bookedServices = [
    {
      title: "Pest control (includes utensil removal)",
      image:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1731504272013-0ef836.webp?updatedAt=1748425034416",
      rating: 4.79,
      reviews: "107K",
      price: 1098,
      icon: "settings",
    },
    {
      title: "At Home Consultation",
      image:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1727776714128-a28056.webp?updatedAt=1748925239758",
      rating: 4.79,
      reviews: "107K",
      price: 1098,
      icon: "settings",
    },
    {
      title: "Apartment Pest Control",
      image:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1738258955021-96e8b0.webp?updatedAt=1748925239724",
      rating: 4.79,
      reviews: "107K",
      price: 1098,
      icon: "settings",
    },
    {
      title: "Foam Jet AC Service",
      image:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1738148578095-ba2fe3.webp?updatedAt=1748521277787",
      rating: 4.79,
      reviews: "107K",
      price: 1098,
      icon: "settings",
    },
    {
      title: "Apartment Termite Control",
      image:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1729772247309-29d7b5.webp?updatedAt=1748925239766",
      rating: 4.79,
      reviews: "107K",
      price: 1098,
      icon: "settings",
    },
  ];

  const pestServices = [
    {
      title: "Full Home Cleaning",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1700129474836-c5b146.webp?updatedAt=1748426437066",
    },
    {
      title: "Sofa & Carpet Cleaning",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1700204929955-75dd47.webp?updatedAt=1748926041793",
    },
    {
      title: "Cockroach,Ant & General Pest Control",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1700141859007-d310cd.webp?updatedAt=1748926041786",
    },
    {
      title: "Bathroom Cleaning",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1700217115195-4b42c0.webp?updatedAt=1748926041704",
    },
    {
      title: "Kitchen Cleaning",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1700217150690-faf4ec.webp?updatedAt=1748926041725",
    },
  ];

  const applianceServices = [
    {
      title: "Washing Machine",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1744620504925-e5c5e3.webp?updatedAt=1748926745953",
    },
    {
      title: "Air Cooler",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1744620493814-5a8c02.webp?updatedAt=1748926745916",
    },
    {
      title: "Gayser",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1744620483134-bbbeee.webp?updatedAt=1748926745961",
    },
    {
      title: "Television",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1744620497539-f8e4a6.webp?updatedAt=1748926745519",
    },
    {
      title: "Kitchen Cleaning",
      imageURL:
        "https://ik.imagekit.io/yzrrrgg3d/professional/1700217150690-faf4ec.webp?updatedAt=1748926041725",
    },
   
  ];

  return (
    <>
      <MyNavbar />
      <Container fluid px={150} py={60}>
        <Stack gap={100}>
          <SimpleGrid cols={2} spacing={100}>
            <Box>
              <Stack>
                <Title
                  order={1}
                  w={"70%"}
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Home services at your doorstep
                </Title>

                <Card withBorder>
                  <Stack>
                    <Title order={4} c={"dimmed"}>
                      What are you looking for?
                    </Title>
                    <SimpleGrid cols={3}>
                      {services.map((service, ind) => (
                        <Box
                          key={ind}
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => navigate(service.href)}
                        >
                          <Stack gap={"xs"}>
                            <Flex
                              justify={"center"}
                              align={"center"}
                              bg={"#f7f7f7"}
                              h={75}
                              style={{
                                borderRadius: 8,
                              }}
                            >
                              <Image w={"40%"} src={service.imageUrl} />
                            </Flex>
                            <Text size="sm">{service.title}</Text>
                          </Stack>
                        </Box>
                      ))}
                    </SimpleGrid>
                    <SimpleGrid cols={2}>
                      <Box>
                        <Stack gap={"xs"}>
                          <Flex
                            justify={"space-between"}
                            align={"center"}
                            bg={"#f7f7f7"}
                            style={{
                              borderRadius: 8,
                            }}
                            p={"sm"}
                          >
                            <Text size="sm">Home Cleaning</Text>
                            <Image
                              w={"25%"}
                              src={
                                "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20repair.webp?updatedAt=1748413681218"
                              }
                            />
                          </Flex>
                        </Stack>
                      </Box>
                      <Box>
                        <Stack gap={"xs"}>
                          <Flex
                            justify={"space-between"}
                            align={"center"}
                            bg={"#f7f7f7"}
                            style={{
                              borderRadius: 8,
                            }}
                            p={"sm"}
                          >
                            <Text size="sm">Home Cleaning</Text>
                            <Image
                              w={"25%"}
                              src={
                                "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20repair.webp?updatedAt=1748413681218"
                              }
                            />
                          </Flex>
                        </Stack>
                      </Box>
                    </SimpleGrid>
                  </Stack>
                </Card>
              </Stack>
            </Box>
            <Box>
              <Grid gutter="md">
                {/* Left side - tall image */}
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <AspectRatio ratio={3 / 4}>
                    <Image
                      src="https://ik.imagekit.io/yzrrrgg3d/professional/technician.avif?updatedAt=1748417515450"
                      alt="Beauty Service"
                      radius="md"
                      fit="cover"
                    />
                  </AspectRatio>
                  <AspectRatio ratio={4 / 2}>
                    <Image
                      mt={8}
                      src="https://ik.imagekit.io/yzrrrgg3d/professional/cleaning.jfif?updatedAt=1748416600458"
                      alt="Massage"
                      radius="md"
                      fit="cover"
                    />
                  </AspectRatio>
                </Grid.Col>

                {/* Right side - top wide image */}
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <AspectRatio ratio={4 / 2}>
                    <Image
                      src="https://ik.imagekit.io/yzrrrgg3d/professional/plumber.jpg?updatedAt=1748419449182"
                      alt="Beauty Service"
                      radius="md"
                      fit="cover"
                    />
                  </AspectRatio>
                  <AspectRatio ratio={3 / 4}>
                    <Image
                      mt={8}
                      src="https://ik.imagekit.io/yzrrrgg3d/professional/electrittian.jfif?updatedAt=1748416808520"
                      alt="Massage"
                      radius="md"
                      fit="cover"
                    />
                  </AspectRatio>
                </Grid.Col>
              </Grid>
            </Box>
          </SimpleGrid>

          <SimpleGrid cols={3}>
            <Box
              h={222}
              style={{
                overflow: "hidden",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              <Image
                src="https://ik.imagekit.io/yzrrrgg3d/professional/1745848240853-e53ad3.webp?updatedAt=1748420217698"
                alt="..."
                style={{
                  transition: "transform 0.4s ease",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>
            <Box
              h={222}
              style={{
                overflow: "hidden",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              <Image
                src="https://ik.imagekit.io/yzrrrgg3d/professional/1740123536224-5eec97.webp?updatedAt=1748425280827"
                alt="..."
                style={{
                  transition: "transform 0.4s ease",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>
            <Box
              h={222}
              style={{
                overflow: "hidden",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              <Image
                src="https://ik.imagekit.io/yzrrrgg3d/professional/1745848360087-3d3d8e.webp?updatedAt=1748419951729"
                alt="..."
                style={{
                  transition: "transform 0.4s ease",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>
          </SimpleGrid>
          <Stack>
            <Title order={2}>Most Booked Service</Title>
            <SimpleGrid cols={5} spacing={"xl"}>
              {bookedServices.map((ser) => (
                <Card shadow="sm" padding="md" radius="md" withBorder w={240}>
                  <Box style={{ overflow: "hidden", borderRadius: 8 }}>
                    <Image src={ser.image} alt="Pest Control" height={150} />
                  </Box>

                  <Text mt="sm" fw={600} fz="sm">
                    {ser.title}
                  </Text>

                  <Group gap="xs" mt={4}>
                    <IconSettings size={14} color="gold" />
                    <Text fz="xs" c="dimmed" fw={500}>
                      {ser.rating}
                    </Text>
                  </Group>

                  <Text mt={4} fw={600}>
                    {ser.price}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>

          <Box
            style={{
              overflow: "hidden",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            <Image
              src="https://ik.imagekit.io/yzrrrgg3d/professional/1736922795409-bece35.webp?updatedAt=1748420217638"
              alt="..."
              style={{
                transition: "transform 0.4s ease",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </Box>
          <Stack>
            <Title>Cleaning & Pest Control</Title>
            <SimpleGrid cols={5}>
              {pestServices.map((ser) => (
                <Card
                  style={{
                    borderRadius: 8,
                    height: 280,
                    backgroundColor: "white",
                  }}
                  p={0}
                >
                  <Stack justify="space-between" h={"100%"}>
                    <Text mt={20} ml={20} fw={600}>
                      {ser.title}
                    </Text>
                    <Image src={ser.imageURL} />
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
          <Stack>
            <Title>Appliance Service & Repair</Title>
            <SimpleGrid cols={5}>
              {applianceServices.map((ser) => (
                <Card
                  style={{
                    borderRadius: 8,
                    height: 280,
                    backgroundColor: "white",
                  }}
                  p={0}
                >
                  <Stack justify="space-between" h={"100%"}>
                    <Text mt={20} ml={20} fw={600}>
                      {ser.title}
                    </Text>
                    <Image
                      src={
                       ser.imageURL
                      }
                    />
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
          <Stack>
            <Title order={2}>Home Repair & Installation</Title>
            <SimpleGrid cols={5} spacing={"xl"}>
              <Card shadow="none" padding={0} radius="md" bg={"transparent"}>
                <Box style={{ overflow: "hidden", borderRadius: 8 }}>
                  <Image
                    src="https://ik.imagekit.io/yzrrrgg3d/professional/1731504272013-0ef836.webp?updatedAt=1748425034416"
                    alt="Pest Control"
                    height={150}
                  />
                </Box>

                <Stack gap={0}>
                  <Text mt="sm" fw={600} fz="sm">
                    Pest control (includes utensil removal)
                  </Text>

                  <Group gap="xs" mt={4}>
                    <IconSettings size={14} color="gold" />
                    <Text fz="xs" c="dimmed" fw={500}>
                      4.79 (107K)
                    </Text>
                  </Group>

                  <Text mt={4} fw={600}>
                    ₹1,098
                  </Text>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
