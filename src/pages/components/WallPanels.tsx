import {
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Group,
  Button,
  Image,
  List,
  ThemeIcon,
  Modal,
  Box,
} from "@mantine/core";
import MyNavbar from "../auth/Navbar";
import IconCircleCheck from "../../assets/icons/IconCircleCheck";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import BookingForm from "./BookingForm";

export default function WallPaperServices() {
  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const [opened, { open: OpenBookingModal, close: CloseBookingModal }] =
    useDisclosure();
  console.log(OpenBookingModal);
  const services = [
    {
      title: "Living Room",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1741179781755-6f91bf.webp?updatedAt=1748523005843",
      href: "living-room",
    },
    {
      title: "TV Wall",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1741179777202-f152ce.webp?updatedAt=1748523005750",
      href: "tv-room",
    },
    {
      title: "Bedroom",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1741179786710-eea0dd.webp?updatedAt=1748523005615",
      href: "bedroom",
    },
    {
      title: "Other Areas",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1741248101066-4471f8.webp?updatedAt=1748523005901",
      href: "other",
    },
  ];

  const handleScroll = (id: any) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleCloseBookingModal = () => {
    CloseBookingModal();
  };
  return (
    <>
      <MyNavbar />
      <Container fluid px={isMobile ? "24px" : "120px"} py={60}>
        <Grid>
          <Grid.Col
            style={{
              position: isMobile ? "static" : "sticky",
              top: isMobile ? "auto" : "20px",
              alignSelf: isMobile ? "initial" : "flex-start",
              zIndex: isMobile ? "auto" : 1,
            }}
            span={{
              base: 12,
              xs: 12,
              sm: 12,
              md: 12,
              lg: 3,
              xl: 3,
            }}
          >
            <Title
              style={{
                fontFamily: "serif",
              }}
            >
              Wall Panels
            </Title>
            <Card mt={18}>
              <Divider label="Select a Service" />
              <SimpleGrid cols={2} mt={12}>
                {services.map((service, ind) => (
                  <Stack
                    key={ind}
                    align="center"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => handleScroll(service.href)}
                  >
                    <Flex
                      h={75}
                      w={75}
                      bg={"#efefef"}
                      justify={"center"}
                      align={"center"}
                    >
                      <Image w={74} src={service.url} />
                    </Flex>
                    <Text fz={12}>{service.title}</Text>
                  </Stack>
                ))}
              </SimpleGrid>
            </Card>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 12,
              sm: 12,
              md: 12,
              lg: 6,
              xl: 6,
            }}
          >
            <Card>
              <Stack>
                <div id="living-room">
                  <Stack>
                    <Title>Living Room</Title>
                    <Box
                      style={{
                        overflow: "hidden",
                        borderRadius: 8,
                        cursor: "pointer",
                      }}
                    >
                      <Image
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
                        src={
                          "https://ik.imagekit.io/yzrrrgg3d/professional/1745848854746-54d4f1.webp?updatedAt=1748526819163"
                        }
                      />
                    </Box>
                    <Group justify="space-between">
                      <Title
                        order={4}
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        Wall Panels Consultation
                      </Title>
                      <Button variant="outline">Book</Button>
                    </Group>
                    <List spacing="xs" size="xs" center>
                      <List.Item>
                        Get expert advice & quotation as per your preffered
                        designs for living room
                      </List.Item>
                      <List.Item>Finalize panel samples at home</List.Item>
                      <List.Item>Transparent Pricing</List.Item>
                    </List>
                    <Divider />
                  </Stack>
                </div>
                <div id="tv-room">
                  <Stack>
                    <Title>TV Wall</Title>
                    <Box
                      style={{
                        overflow: "hidden",
                        borderRadius: 8,
                        cursor: "pointer",
                      }}
                    >
                      <Image
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
                        src={
                          "https://ik.imagekit.io/yzrrrgg3d/professional/1745848860104-7848ae.webp?updatedAt=1748526818147"
                        }
                      />
                    </Box>
                    <Group justify="space-between">
                      <Title
                        order={4}
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        TV Wall Panels Consultation
                      </Title>
                      <Button variant="outline">Book</Button>
                    </Group>
                    <List spacing="xs" size="xs" center>
                      <List.Item>
                        Get expert advice & quotation as per your preffered
                        designs for living room
                      </List.Item>
                      <List.Item>Finalize panel samples at home</List.Item>
                      <List.Item>Transparent Pricing</List.Item>
                    </List>
                    <Divider />
                  </Stack>
                </div>
                <div id="bedroom">
                  <Stack>
                    <Title>Bedroom</Title>
                    <Box
                      style={{
                        overflow: "hidden",
                        borderRadius: 8,
                        cursor: "pointer",
                      }}
                    >
                      <Image
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
                        src={
                          "https://ik.imagekit.io/yzrrrgg3d/professional/1745848847729-4acd92.webp?updatedAt=1748526819776"
                        }
                      />
                    </Box>
                    <Group justify="space-between">
                      <Title
                        order={3}
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        Bedroom Wall Panels Consultation
                      </Title>
                      <Button variant="outline">Book</Button>
                    </Group>
                    <List spacing="xs" size="xs" center>
                      <List.Item>
                        Get expert advice & quotation as per your preffered
                        designs for living room
                      </List.Item>
                      <List.Item>Finalize panel samples at home</List.Item>
                      <List.Item>Transparent Pricing</List.Item>
                    </List>
                    <Divider />
                  </Stack>
                </div>

                <div id="other">
                  <Stack>
                    <Title>Other Areas</Title>
                    <Box
                      style={{
                        overflow: "hidden",
                        borderRadius: 8,
                        cursor: "pointer",
                      }}
                    >
                      <Image
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
                        src={
                          "https://ik.imagekit.io/yzrrrgg3d/professional/1741249352610-176940.webp?updatedAt=1748526819455"
                        }
                      />
                    </Box>
                    <Group justify="space-between">
                      <Title
                        order={3}
                        style={{
                          fontFamily: "inherit",
                        }}
                      >
                        Other Areas Wall Panels Consultation
                      </Title>
                      <Button variant="outline">Book</Button>
                    </Group>
                    <List spacing="xs" size="xs" center>
                      <List.Item>
                        Get expert advice & quotation as per your preffered
                        designs for living room
                      </List.Item>
                      <List.Item>Finalize panel samples at home</List.Item>
                      <List.Item>Transparent Pricing</List.Item>
                    </List>
                    <Divider />
                  </Stack>
                </div>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              xs: 12,
              sm: 12,
              md: 12,
              lg: 3,
              xl: 3,
            }}
            style={{
              position: "sticky",
              top: 20,
              alignSelf: "flex-start", // ensures it respects sticky behavior
              zIndex: 1,
            }}
            top={0}
          >
            <Stack>
              <Card>
                <Flex justify={"center"} align={"center"} direction={"column"}>
                  <Image
                    w={200}
                    src={
                      "https://ik.imagekit.io/yzrrrgg3d/professional/download.jfif?updatedAt=1748491387429"
                    }
                  />
                  <Text size="sm" mt={12}>
                    You do not have any bookings
                  </Text>
                </Flex>
              </Card>
              <Card>
                <Flex gap={"md"}>
                  <Stack w={"70%"}>
                    <Title order={4}>Our Promise</Title>
                    <List
                      spacing="xs"
                      size="sm"
                      center
                      icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                          <IconCircleCheck size={16} />
                        </ThemeIcon>
                      }
                    >
                      <List.Item>Verified Professionals</List.Item>
                      <List.Item>Hassle Free Bookings</List.Item>
                      <List.Item>Transparent Pricing</List.Item>
                    </List>
                  </Stack>
                </Flex>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      <Modal
        opened={opened}
        title="Book a service"
        onClose={() => handleCloseBookingModal()}
      >
        <BookingForm />
      </Modal>
    </>
  );
}
