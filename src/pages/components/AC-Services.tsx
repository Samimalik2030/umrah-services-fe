import {
  Container,
  Title,
  Text,
  Grid,
  Image,
  Overlay,
  Box,
  Stack,
} from "@mantine/core";
import MyNavbar from "../auth/Navbar";

export default function ACService() {
  return (
    <>
      <MyNavbar />
      <Box>
        {/* Header */}
        <Box pos="relative" h={400}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1682145344450-34d8323dec84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QUMlMjBTZXJ2aWNlc3xlbnwwfDB8MHx8fDA%3D"
            alt="AC Service Background"
            h={400}
            w="100%"
            fit="cover"
          />
          <Overlay color="#000" opacity={0.5} zIndex={1} />
          <Box
            pos="absolute"
            top="50%"
            left="10%"
            style={{ transform: "translateY(-50%)" }}
            c="white"
          >
            <Title order={1} mb="sm" c={"white"}>
              Professional AC Services
            </Title>
            <Text size="lg" c={"white"}>
              Reliable • Affordable • 24/7 Support
            </Text>
          </Box>
        </Box>

        {/* Section 1 - Installation */}
        <Container py="xl" fluid>
     <Container>
             <Grid align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
         
                src={
                  "https://images.unsplash.com/photo-1636409305041-3bd4fe738236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QUN8ZW58MHwyfDB8fHww"
                }
                alt="AC Installation"
                radius="md"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack>
                <Title order={2}>AC Installation</Title>
                <Text>
                  We offer quick and professional installation for all AC types.
                  Our technicians ensure secure and optimized setup at your
                  convenience.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
     </Container>
        </Container>

        {/* Section 2 - Repair */}
        <Container py="xl">
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
              <Stack>
                <Title order={2}>AC Repair</Title>
                <Text>
                  Cooling issues? Leaks? Strange noises? Our expert repair
                  services cover all major AC problems — fast and effectively.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
              <Image src="/images/ac-repair.jpg" alt="AC Repair" radius="md" />
            </Grid.Col>
          </Grid>
        </Container>

        {/* Section 3 - Maintenance */}
        <Container py="xl">
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                src="/images/ac-maintenance.jpg"
                alt="AC Maintenance"
                radius="md"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack>
                <Title order={2}>AC Maintenance</Title>
                <Text>
                  Keep your AC in peak condition with our seasonal maintenance
                  plans — including deep cleaning, filter checks, and
                  performance optimization.
                </Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
