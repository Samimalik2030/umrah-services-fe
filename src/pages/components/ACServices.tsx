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
} from "@mantine/core";
import MyNavbar from "../auth/Navbar";
import IconCircleCheck from "../../assets/icons/IconCircleCheck";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import BookingForm from "./BookingForm";


export default function ACServices() {
  const isMobile = useMediaQuery("(max-width: 56.25em)");

  const [opened, { open: OpenBookingModal, close: CloseBookingModal }] =
    useDisclosure();

  const services = [
    {
      title: "Service",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20repair.webp?updatedAt=1748413681218",
      href: "service-section",
    },
    {
      title: "Repair & gas refil",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410237566-8068d5.webp?updatedAt=1748520127537",
      href: "repair-section",
    },
    {
      title: "Installation/Uninstallation",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410249313-cda5a9.webp?updatedAt=1748520127545",
      href: "installation-section",
    },
  ];

  const ServiceDetails = [
    {
      title: "Foam-jet AC Service",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745495751917-d97329.webp?updatedAt=1748521315714",
    },
    {
      title: "Lite AC Servie",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1738148578095-ba2fe3.webp?updatedAt=1748521277787",
    },
  ];
  const RepairServiceDetails = [
    {
      title: "AC less/no cooling repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410249313-cda5a9.webp?updatedAt=1748520127545",
    },
    {
      title: "AC power issue repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410249313-cda5a9.webp?updatedAt=1748520127545",
    },
    {
      title: "AC noise/smell repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410249313-cda5a9.webp?updatedAt=1748520127545",
    },
    {
      title: "AC water leakage repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410249313-cda5a9.webp?updatedAt=1748520127545",
    },
    {
      title: "AC water leakage repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410249313-cda5a9.webp?updatedAt=1748520127545",
    },
    {
      title: "Gas refil & checkup",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410249313-cda5a9.webp?updatedAt=1748520127545",
    },
  ];

  const InstalltionServiceDetails = [
    {
      title: "Split AC installation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410509470-d70313.webp?updatedAt=1748521530681",
    },
    {
      title: "Window AC Installation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410499394-4d64af.webp?updatedAt=1748521530554",
    },
    {
      title: "Window AC UnInstallation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410503295-659c77.webp?updatedAt=1748521530514",
    },
    {
      title: "Split AC UnInstallation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1745410499394-4d64af.webp?updatedAt=1748521530554",
    },
  ];
  const handleScroll = (id: any) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleOpenBookingModal = () => {

    OpenBookingModal();
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
              position: isMobile ? "static" : "sticky", // 'static' is the default position
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
              AC Service & Repair
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
                <div id="service-section">
                  <Stack gap={"xl"}>
                    <Title order={2}>Service</Title>
                    {ServiceDetails.map((ser, ind) => (
                      <>
                        <Flex key={ind}>
                          <Stack w={"70%"}>
                            <Title
                              order={4}
                              style={{
                                fontFamily: "inherit",
                              }}
                            >
                              {ser.title}
                            </Title>
                            <Group>
                              <Text fw={"bold"}>Rs.{ser.price}</Text>
                              {/* <Text>.{ser.time}mins</Text> */}
                            </Group>
                            <Text>{ser.desc}</Text>
                            <Button p={0} w={100} size="sm" variant="subtle">
                              View Details
                            </Button>
                          </Stack>
                          <Flex
                            w={"30%"}
                            justify={"center"}
                            align={"center"}
                            pos={"relative"}
                          >
                            <Flex
                              w={100}
                              h={100}
                              justify={"center"}
                              bg={"#efefef"}
                              align={"center"}
                              style={{
                                borderRadius: 8,
                              }}
                            >
                              <Image w={100} src={ser.url} />
                            </Flex>
                            <Button
                              pos={"absolute"}
                              bottom={15}
                              variant="outline"
                              size="xs"
                              onClick={() => handleOpenBookingModal()}
                            >
                              Book
                            </Button>
                          </Flex>
                        </Flex>
                        <Divider />
                      </>
                    ))}
                  </Stack>
                </div>
                <div id="repair-section">
                  <Stack gap={"xl"}>
                    <Title order={2}>Repair & Gas refil</Title>
                    {RepairServiceDetails.map((ser, ind) => (
                      <>
                        <Flex key={ind}>
                          <Stack w={"70%"}>
                            <Title
                              order={4}
                              style={{
                                fontFamily: "inherit",
                              }}
                            >
                              {ser.title}
                            </Title>
                            <Group>
                              <Text fw={"bold"}>Rs.{ser.price}</Text>
                              {/* <Text>.{ser.time}mins</Text> */}
                            </Group>
                            <Text>{ser.desc}</Text>
                            <Button p={0} w={100} size="sm" variant="subtle">
                              View Details
                            </Button>
                          </Stack>
                          <Flex
                            w={"30%"}
                            justify={"center"}
                            align={"center"}
                            pos={"relative"}
                          >
                            <Flex
                              w={100}
                              h={100}
                              justify={"center"}
                              bg={"#efefef"}
                              align={"center"}
                              style={{
                                borderRadius: 8,
                              }}
                            >
                              <Image w={100} src={ser.url} />
                            </Flex>
                            <Button
                              pos={"absolute"}
                              bottom={15}
                              variant="outline"
                              size="xs"
                            >
                              Book
                            </Button>
                          </Flex>
                        </Flex>
                        <Divider />
                      </>
                    ))}
                  </Stack>
                </div>
                <div id="installation-section">
                  <Stack gap={"xl"}>
                    <Title
                      order={2}
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      Installation/Uninstallation
                    </Title>
                    {InstalltionServiceDetails.map((ser, ind) => (
                      <>
                        <Flex key={ind}>
                          <Stack w={"70%"}>
                            <Title order={4}>{ser.title}</Title>
                            <Group>
                              <Text fw={"bold"}>Rs.{ser.price}</Text>
                              {/* <Text>.{ser.time}mins</Text> */}
                            </Group>
                            <Text>{ser.desc}</Text>
                            <Button p={0} w={100} size="sm" variant="subtle">
                              View Details
                            </Button>
                          </Stack>
                          <Flex
                            w={"30%"}
                            justify={"center"}
                            align={"center"}
                            pos={"relative"}
                          >
                            <Flex
                              w={100}
                              h={100}
                              justify={"center"}
                              bg={"#efefef"}
                              align={"center"}
                              style={{
                                borderRadius: 8,
                              }}
                            >
                              <Image w={100} src={ser.url} />
                            </Flex>
                            <Button
                              pos={"absolute"}
                              bottom={15}
                              variant="outline"
                              size="xs"
                              bg={"#ffff"}
                            >
                              Book
                            </Button>
                          </Flex>
                        </Flex>
                        <Divider />
                      </>
                    ))}
                  </Stack>
                </div>

                <div id="booking-section">
                  <Stack gap={"xl"}>
                    <Title
                      order={2}
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      Book a Visit
                    </Title>

                    <Flex>
                      <Stack w={"70%"}>
                        <Title
                          order={4}
                          style={{
                            fontFamily: "inherit",
                          }}
                        >
                          Electrician Visit
                        </Title>
                        <Group>
                          <Text fw={"bold"}>Rs.149</Text>
                          {/* <Text>.{ser.time}mins</Text> */}
                        </Group>
                        <List spacing="xs" size="xs" center>
                          <List.Item>
                            Electrician will assess your needs upon arrival at
                            your home
                          </List.Item>
                          <List.Item>
                            A quote will be provided before the servie begins
                          </List.Item>
                          <List.Item>Transparent Pricing</List.Item>
                        </List>
                        <Button p={0} w={100} size="sm" variant="subtle">
                          View Details
                        </Button>
                      </Stack>
                      <Flex
                        w={"30%"}
                        justify={"center"}
                        align={"center"}
                        pos={"relative"}
                      >
                        <Flex
                          w={100}
                          h={100}
                          justify={"center"}
                          bg={"#efefef"}
                          align={"center"}
                          style={{
                            borderRadius: 8,
                          }}
                        >
                          <Image
                            w={100}
                            src={
                              "https://ik.imagekit.io/yzrrrgg3d/professional/1700638213050-c722c8.webp?updatedAt=1748502662608"
                            }
                          />
                        </Flex>
                        <Button
                          pos={"absolute"}
                          bottom={15}
                          variant="outline"
                          size="xs"
                        >
                          Book
                        </Button>
                      </Flex>
                    </Flex>
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
        <BookingForm  city="Multan"/>
      </Modal>
    </>
  );
}
