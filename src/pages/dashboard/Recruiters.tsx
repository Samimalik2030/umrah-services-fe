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
  Skeleton,
  Avatar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useGetRecruiters from "../../hooks/useGetRecruiter";
import useGetApplications from "../../hooks/useGetApplications";

export default function Recruiters() {
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure();
  const { isLoading, recruiters } = useGetRecruiters();

const {applications} = useGetApplications('Multans')
console.log(applications)
  if (isLoading) {
    return (
      <Stack>
        <Skeleton height={50} circle animate />
        <Skeleton height={50} animate />
        <Skeleton height={50} animate />
      </Stack>
    );
  }

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
            {recruiters?.map((recruiter, ind) => (
              <Card key={ind}>
                <Flex>
                  <Stack w={"30%"} p={3}>
                    <Flex justify={"flex-start"}>
                      <Box h={100} w={100}>
                   
                        <Avatar radius={"xl"} size={'xl'} src={recruiter?.user?.profileImage?.url}/>
                      </Box>
                    </Flex>
                  </Stack>

                  <Box w={"50%"} p={5}>
                    <Flex justify={"center"} ml={8}>
                      <Stack gap={15}>
                        <Badge>{recruiter.district}</Badge>
                        <Box>
                          <Title order={4}>{recruiter?.user?.fullName}</Title>
                          <Text fz={12}>{recruiter?.user?.email}</Text>
                          <Text fz={12}>{recruiter.phone}</Text>
                        </Box>
                      </Stack>
                    </Flex>
                  </Box>
                </Flex>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
