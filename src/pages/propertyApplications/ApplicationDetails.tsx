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
  ActionIcon,
  Image,
  ScrollArea,
  Badge,
  Spoiler,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../http";
import IconArrowNarrowLeft from "../../assets/icons/IconArrowNarrowLeft";
import { PatchApplicationPaymentStatus } from "../../http/Api";

function ApplicationDetails() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { id } = useParams();
  //   const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: application, isLoading } = useQuery({
    queryKey: ["application", id],
    queryFn: () => http.applications.applicationControllerGet(id ?? ""),
    enabled: !!id,
  });

  const queryClient = useQueryClient();

  const { mutate: updateApplication, isPending: updatingApplication } =
    useMutation({
      mutationFn: ({
        id,
        data,
      }: {
        id: string;
        data: PatchApplicationPaymentStatus;
      }) =>
        http.applications
          .applicationControllerPatchAppPaymentStatus(id, data)
          .then(() => {
            queryClient.invalidateQueries({ queryKey: ["applications"] });
            queryClient.invalidateQueries({ queryKey: ["application"] });
          }),
    });

  console.log(application);
  const handleUpdate = (
    id: string,
    paymentStatus: PatchApplicationPaymentStatus["paymentStatus"]
  ) => {
    const data: PatchApplicationPaymentStatus = { paymentStatus };
    updateApplication({ id, data });
  };

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
      <LoadingOverlay visible={isLoading || updatingApplication} />
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
              <Group>
                <Text>Status:</Text>
                <Badge
                  color={
                    application?.data.paymentStatus == "Paid" ? "green" : "red"
                  }
                >
                  {application?.data.paymentStatus}
                </Badge>
              </Group>

              <Group grow>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUpdate(application?.data?.id ?? "", "Paid");
                  }}
                >
                  Rent Paid
                </Button>
                <Button
                  color="red"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUpdate(application?.data?.id ?? "", "Unpaid");
                  }}
                >
                  Rent Not Paid
                </Button>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
      <Card withBorder>
        {" "}
        <Stack>
          <Group justify="space-between" align="center">
            <Group gap={4} align="center">
              <Text fw={600} size="xl">
                Name:
              </Text>
              <Text size="xl">{application?.data?.property?.name}</Text>
            </Group>

            <Badge
              size="xl"
              variant="outline"
              color={
                application?.data?.property?.status === "Approved"
                  ? "green"
                  : application?.data?.property?.status === "Rejected"
                    ? "red"
                    : "orange"
              }
            >
              {application?.data?.property?.status ?? "N/A"}
            </Badge>
          </Group>
          <Stack gap={4}>
            <Text size="xl" fw={600}>
              Description:
            </Text>
            <Spoiler mih={60} showLabel="Show more" hideLabel="Show less">
              <Text size="lg"> {application?.data?.property?.description}</Text>
            </Spoiler>
          </Stack>
          <Stack gap={4}>
            <Text size="xl" fw={600}>
              Location:
            </Text>

            <Text size="lg"> {application?.data?.property?.location}</Text>
          </Stack>

          <Text fw={600} size="lg">
            Photos:
          </Text>
          <ScrollArea w={"80%"} scrollbars="x">
            <Card shadow="xs" withBorder w={"100%"} p={"xl"}>
              <Group grow align="center">
                {application?.data?.property?.photos?.map(
                  (photo: any, index: number) => (
                    <Image
                      fit="cover"
                      w={"60%"}
                      h={200}
                      key={index}
                      src={photo?.url}
                    />
                  )
                )}
              </Group>
            </Card>
          </ScrollArea>
        </Stack>
      </Card>
    </Stack>
  );
}

export default ApplicationDetails;
function updateApplication(arg0: {
  id: string;
  data: PatchApplicationPaymentStatus;
}) {
  throw new Error("Function not implemented.");
}
