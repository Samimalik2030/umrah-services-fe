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
import { useState } from "react";
import   BookingForm  from "./BookingForm";
import AudioRecorder from "./audioRecording";


export default function ElectricianServices() {
  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const [selectedService, setService] = useState();
  const [opened, { open: OpenBookingModal, close: CloseBookingModal }] =
    useDisclosure();

  const services = [
    {
      title: "Switch & Socket",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/switch.webp?updatedAt=1748502669000",
      href: "switch-section",
    },
    {
      title: "Fan",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/fan.webp?updatedAt=1748502668069",
      href: "fan-section",
    },
    {
      title: "Wall/Ceiling Light",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/wall.webp?updatedAt=1748502667972",
      href: "light-section",
    },
    {
      title: "Wiring",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/wiring.webp?updatedAt=1748502667976",
      href: "wiring-section",
    },
    {
      title: "Door Bell",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/doorbel.webp?updatedAt=1748502667989",
      href: "doorbell-section",
    },
    {
      title: "MCB & Submeter",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1701149726512-5b2001.webp?updatedAt=1748502662741",
      href: "submeter-section",
    },
    {
      title: "Inverter & Stabiliser",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/inverter.webp?updatedAt=1748502667552",
      href: "inverter-section",
    },
    {
      title: "Appliance",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/appliance.webp?updatedAt=1748502666929",
      href: "appliance-section",
    },
    {
      title: "Book a Visit",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/elecetrician.webp?updatedAt=1748502667039",
      href: "booking-section",
    },
  ];
  const SwitchServicesDetails = [
    {
      title: "Switchbox installation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/switch.webp?updatedAt=1748502669000",
    },
    {
      title: "Switchbox/Socket Replacement",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20switch%20box.webp?updatedAt=1748502667010",
    },
    {
      title: "Switchboard/Switchbox Replair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1713963216053-f1bc31.webp?updatedAt=1748502665259",
    },
  ];
  const FanServicesDetails = [
    {
      title: "Fan Installation(ceiling/exhaust/wall)",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1729158581570-e7cd15.webp?updatedAt=1748502665160",
    },
    {
      title: "Fan Repair(ceiling/exhaust/wall)",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1729158488252-2dccdd.webp?updatedAt=1748502665172",
    },
    {
      title: "Fan Regulator Repair/Replacement",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1729092733345-088896.webp?updatedAt=1748502665153",
    },
  ];
  const LightServicesDetails = [
    {
      title: "Bulb/Tubelight holder instllation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1713783421510-fbac3b.webp?updatedAt=1748502665059",
    },
    {
      title: "Bulb/Tubelight holder repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1713783421510-fbac3b.webp?updatedAt=1748502665059",
    },
    {
      title: "Chandelier Installation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1729097858751-25b085.webp?updatedAt=1748502665069",
    },
  ];
  const WiringServicesDetails = [
    {
      title: "External Wiring (per 12cm)",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1713958880062-1e69dd.webp?updatedAt=1748502665027",
    },
    {
      title: "Internal Wiring (per 12cm)",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1718988849397-73c49b.webp?updatedAt=1748506153689",
    },
  ];
  const DoorbellServicesDetails = [
    {
      title: "Doorbell Installation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1727251276143-d8cc28.webp?updatedAt=1748502665092",
    },
    {
      title: "Doorbell Replacement ",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1728470301938-640b3b.webp?updatedAt=1748502664979",
    },
  ];
  const submeterServicesDetails = [
    {
      title: "MCB Installtion",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/ac%20switch%20box.webp?updatedAt=1748502667010",
    },
    {
      title: "MCB/Fuse replacement",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1701149726512-5b2001.webp?updatedAt=1748502662741",
    },
    {
      title: "Submeter Installation/Repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1713959541808-622f7c.webp?updatedAt=1748502662830",
    },
  ];
  const inverterServicesDetails = [
    {
      title: "Inverter Installation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1714115326280-c5ec26.webp?updatedAt=1748502662777",
    },
    {
      title: "Inverter fuse replacement",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1726142899317-abe3ca.webp?updatedAt=1748506451606",
    },
    {
      title: "Inverter repairing",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1726767997462-ea59f1.webp?updatedAt=1748502662792",
    },
    {
      title: "Stablizer Installation",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1726142902084-7d93c0.webp?updatedAt=1748502662891",
    },
    {
      title: "Stablizer repairing",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1726142902084-7d93c0.webp?updatedAt=1748502662891",
    },
  ];
  const applianceServicesDetails = [
    {
      title: "Geyser installation/repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1713960751570-571165.webp?updatedAt=1748502662748",
    },
    {
      title: "TV installation/repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1726768686756-e89281.webp?updatedAt=1748506592719",
    },
    {
      title: "Room heater Repair",
      price: "350",
      time: "30",
      desc: "Installed in specific area for new power oultet",
      url: "https://ik.imagekit.io/yzrrrgg3d/professional/1718988858099-573bd0.webp?updatedAt=1748502662815",
    },
  ];

  const handleScroll = (id: any) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleOpenBookingModal = (service) => {
    setService(service);
    OpenBookingModal();
  };

  const handleCloseBookingModal = () => {
    setService(null);
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
              Electrician
            </Title>
            <Card mt={18}>
              <Divider label="Select a Service" />
              <SimpleGrid cols={3} mt={12}>
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
                <div id="switch-section">
                  <Stack gap={"xl"}>
                    <Title order={2}>Switch & Socket</Title>
                    {SwitchServicesDetails.map((ser, ind) => (
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
                              onClick={()=>handleOpenBookingModal(ser)}
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
                <div id="fan-section">
                  <Stack gap={"xl"}>
                    <Title order={2}>Fan</Title>
                    {FanServicesDetails.map((ser, ind) => (
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
                <div id="light-section">
                  <Stack gap={"xl"}>
                    <Title
                      order={2}
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      Wall/Ceiling Light
                    </Title>
                    {LightServicesDetails.map((ser, ind) => (
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
                <div id="wiring-section">
                  <Stack gap={"xl"}>
                    <Title
                      order={2}
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      Wiring
                    </Title>
                    {WiringServicesDetails.map((ser, ind) => (
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
                <div id="doorbell-section">
                  <Stack gap={"xl"}>
                    <Title
                      order={2}
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      Doorbell Services
                    </Title>
                    {DoorbellServicesDetails.map((ser, ind) => (
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
                <div id="submeter-section">
                  <Stack gap={"xl"}>
                    <Title
                      order={2}
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      MCB & Submeter
                    </Title>
                    {submeterServicesDetails.map((ser, ind) => (
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
                <div id="inverter-section">
                  <Stack gap={"xl"}>
                    <Title
                      order={2}
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      Inverter & Stabilizer
                    </Title>
                    {inverterServicesDetails.map((ser, ind) => (
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
                <div id="appliance-section">
                  <Stack gap={"xl"}>
                    <Title
                      order={2}
                      style={{
                        fontFamily: "inherit",
                      }}
                    >
                      Appliance
                    </Title>
                    {applianceServicesDetails.map((ser, ind) => (
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

      <Modal opened={opened} title="Book a service" onClose={() => handleCloseBookingModal()}>
        <BookingForm/>
      </Modal>
    </>
  );
}
