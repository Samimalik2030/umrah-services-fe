import {
  Container,
  Stack,
  Group,
  Title,
  Button,
  SimpleGrid,
  Card,
  Text,
  useMantineTheme,
  Badge,
  Box,
  Flex,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Recruiters() {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure();

  const recruiter = {
    name: "Ahmed Khan",
    email: "ahmed.khan@punjabpolice.gov.pk",
    phone: "03021234567",
    cnic: "3520112345678",
    gender: "Male",
    address: "Police Lines, Faisalabad",
    district: "Faisalabad",
    qualification: "Bachelor's in Public Administration",
  };

  return (
    <>
      <Container fluid>
        <Stack>
          <Group justify="space-between" align="center">
            <Title order={2}>District Officers</Title>
            <Button color={theme.colors.dark[9]} onClick={open}>
              Add Officer
            </Button>
          </Group>

          <SimpleGrid
            cols={{
              base: 1,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
            }}
          >
            <Card>
              <Flex>
                <Stack w={"30%"} p={3}>
                  <Flex justify={"flex-start"}>
                    <Box h={100} w={100}>
                      <Image
                        h={"100%"}
                        w={"100%"}
                        radius={60}
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITaklCPL8iGBhamjnE4bKejC5qLFAE4yOjw&s"
                        }
                      />
                    </Box>
                  </Flex>
                </Stack>

                <Box w={"50%"} p={5}>
                  <Flex justify={"center"} ml={8}>
                    <Stack gap={15}>
                      <Badge>{recruiter.district}</Badge>
                      <Box>
                        <Title order={4}>{recruiter.name}</Title>
                        <Text fz={12}>{recruiter.email}</Text>
                        <Text fz={12}>{recruiter.phone}</Text>
                      </Box>
                    </Stack>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

   
    </>
  );
}
