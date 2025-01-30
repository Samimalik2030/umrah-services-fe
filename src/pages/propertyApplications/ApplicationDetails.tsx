import {
  Avatar,
  Card,
  Grid,
  Stack,
  Title,
  Text,
  useMantineTheme,
  Group,
  LoadingOverlay,
  ActionIcon
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../http";
import IconArrowNarrowLeft from "../../assets/icons/IconArrowNarrowLeft";

function ApplicationDetails() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { id } = useParams();
  //   const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: application, isLoading } = useQuery({
    queryKey: ["application", id],
    queryFn: () => http.applications.applicationControllerGet(id ?? ""),
    enabled: !!id
  });

  //   const { mutate: updateApplication, isPending: updatingApplication } =
  //     useMutation({
  //       mutationFn: ({
  //         id,
  //         data
  //       }: {
  //         id: string;
  //         data: PatchApplicationPaymentStatus;
  //       }) =>
  //         http.applications
  //           .applicationControllerPatchAppPaymentStatus(id, data)
  //           .then(() => {
  //             queryClient.invalidateQueries({ queryKey: ["applications"] });
  //             queryClient.invalidateQueries({ queryKey: ["application"] });
  //           })
  //     });

  //   const handleUpdate = (
  //     id: string,
  //     paymentStatus: PatchApplicationPaymentStatus["paymentStatus"]
  //   ) => {
  //     const data: PatchApplicationPaymentStatus = { paymentStatus };
  //     updateApplication({ id, data });
  //   };

  return (
    <Stack mx={isMobile ? "lg" : "xl"} mt="lg">
      <LoadingOverlay visible={isLoading} />
      <Group gap={"xs"} align="center">
        <ActionIcon variant="transparent" onClick={() => navigate(-1)}>
          <IconArrowNarrowLeft />
        </ActionIcon>
        <Title order={3}>Property Application</Title>
      </Group>

      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder p={"lg"}>
            <Title order={3}>Student Information</Title>
            <Card.Section p={"md"}>
              <Group align="center" gap={"xs"}>
                <Avatar
                  size={"xl"}
                  src={application?.data.student.user.avatar?.url}
                />
                <Stack gap={0}>
                  <Title order={4}>
                    {application?.data.student.user.fullName}
                  </Title>
                  <Text c={"dimmed"} fw={600}>
                    {application?.data.student.user.email}
                  </Text>
                  <Text c={"dimmed"} fz={"sm"} fw={600}>
                    {application?.data.student.personalInfo.contact}
                  </Text>
                </Stack>
              </Group>
            </Card.Section>
            <Stack gap={"xl"}>
              <Title order={3}>Accommodation Duration</Title>

              <Group justify="space-between">
                <Stack gap={"xs"}>
                  <Text fw={600}>Move In Date</Text>
                  <Text>{application?.data.moveIn}</Text>
                </Stack>
                <Stack gap={"xs"}>
                  <Text fw={600}>Move Out Date</Text>
                  <Text>{application?.data.moveOut}</Text>
                </Stack>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder p={"lg"}>
            <Title order={3}>Host Information</Title>
            <Card.Section p={"md"}>
              <Group align="center" gap={"xs"}>
                <Avatar size={"xl"} />
                <Stack gap={0}>
                  <Title order={4}>
                    {application?.data.property.host.personalInformation?.title}{" "}
                    {
                      application?.data.property.host.personalInformation
                        ?.firstName
                    }{" "}
                    {
                      application?.data.property.host.personalInformation
                        ?.lastName
                    }
                  </Title>
                  <Text c={"dimmed"} fw={600}>
                    {application?.data.property.host.personalInformation?.email}
                  </Text>
                  <Text c={"dimmed"} fz={"sm"} fw={600}>
                    {application?.data.student.personalInfo.contact}
                  </Text>
                </Stack>
              </Group>
            </Card.Section>
            <Stack gap={"xl"}>
              <Title order={3}>Property Details</Title>

              <Group justify="space-between">
                <Stack gap={"xs"}>
                  <Text fw={600}>Move In Date</Text>
                  <Text>{application?.data.moveIn}</Text>
                </Stack>
                <Stack gap={"xs"}>
                  <Text fw={600}>Move Out Date</Text>
                  <Text>{application?.data.moveOut}</Text>
                </Stack>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default ApplicationDetails;
