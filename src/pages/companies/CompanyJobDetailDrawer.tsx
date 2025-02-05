import {
  Badge,
  Button,
  Drawer,
  Group,
  Select,
  SimpleGrid,
  Skeleton,
  Spoiler,
  Stack,
  Text,
  Title
} from "@mantine/core";
import dayjs from "dayjs";
import { Job, UpdateJobStatus } from "../../http/Api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { notifications } from "@mantine/notifications";

type JobDetailsDrawerProps = {
  opened: boolean;
  onClose: () => void;
  job: Job | null;
};

const CompanyJobDetailDrawer = ({
  opened,
  onClose,
  job
}: JobDetailsDrawerProps) => {
  const gap = 8;
  const queryClient = useQueryClient();
  const { mutate: changeJobStatus, isPending } = useMutation({
    mutationKey: ["changeStatusJob"],
    mutationFn: ({ id, data }: { id: string; data: UpdateJobStatus }) =>
      http.jobs.jobControllerPatchStatus(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      notifications.show({
        title: "Success",
        message: "Job status updated successfully",
        color: "green"
      });
    }
  });

  const handleStatusChange = (id: string, data: UpdateJobStatus) => {
    changeJobStatus({ id, data });
  };

  return (
    <Drawer
      size="xl"
      opened={opened}
      onClose={onClose}
      position="right"
      withCloseButton={false}
    >
      {isPending ? (
        <Stack>
          <Skeleton height={50} circle animate />
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} height={50} animate />
          ))}
        </Stack>
      ) : (
        <Stack gap="xl" p="md">
          <Group gap={gap} justify="space-between" align="center">
            <Title order={4}>{job?.title}</Title>
            <Badge
              color={
                job?.status === "Approved"
                  ? "green"
                  : job?.status === "Rejected"
                    ? "red"
                    : "orange"
              }
            >
              {job?.status ?? "N/A"}
            </Badge>
          </Group>

          <Stack gap={gap}>
            <Title order={5}>Description</Title>
            <Spoiler mih={80} showLabel="Show More" hideLabel="Show Less">
              <Text opacity={0.7}>{job?.description}</Text>
            </Spoiler>
          </Stack>

          <SimpleGrid cols={2}>
            <Stack gap={gap}>
              <Title order={5}>Created At</Title>
              <Text>{dayjs(job?.createdAt).format("DD MMM, YYYY HH:mm")}</Text>
            </Stack>
            <Stack gap={gap}>
              <Title order={5}>Last Updated At</Title>
              <Text>{dayjs(job?.updatedAt).format("DD MMM, YYYY HH:mm")}</Text>
            </Stack>
          </SimpleGrid>

          <Stack gap={gap}>
            <Title order={5}>Job ID</Title>
            <Text opacity={0.7}>{job?.id}</Text>
          </Stack>

          <Stack gap={gap}>
            <Group justify="space-between">
              <Title order={5}>Fare Included</Title>
              <Badge size="sm" color={job?.isFareIncluded ? "green" : "red"}>
                {job?.isFareIncluded ? "Yes" : "No"}
              </Badge>
            </Group>
            <Group justify="space-between">
              <Title order={5}>Lunch Included</Title>
              <Badge size="sm" color={job?.isLunchIncluded ? "green" : "red"}>
                {job?.isLunchIncluded ? "Yes" : "No"}
              </Badge>
            </Group>

            <Group justify="space-between">
              <Title order={5}>Archived</Title>
              <Badge size="sm" color={job?.isArchived ? "green" : "red"}>
                {job?.isArchived ? "Yes" : "No"}
              </Badge>
            </Group>
          </Stack>

          <Stack gap={gap}>
            <Title order={5}>Reporting Information</Title>
            <Group gap={2}>
              <Text fw={700} size="sm">
                Name:
              </Text>
              <Text>{`${job?.reportingInformation.firstName} ${job?.reportingInformation.lastName}`}</Text>
            </Group>

            <Group gap={2}>
              <Text fw={700} size="sm">
                Position:
              </Text>
              <Text>{job?.reportingInformation.position}</Text>
            </Group>
          </Stack>

          <Stack gap={gap}>
            {/* Likely to require interns */}
            <Title order={5}>Likely to Require Interns</Title>

            <Group>
              {job?.whatTimeOfYearAreYouMostLikelyToRequireInterns.map(
                (time) => {
                  return (
                    <Badge variant="light" size="md" key={time} color="black">
                      {time}
                    </Badge>
                  );
                }
              )}
            </Group>
          </Stack>

          <Stack gap={gap}>
            {/* Days of the week */}
            <Title order={5}>Days of Work</Title>
            <Group>
              {job?.daysOfWork.map((day) => {
                return (
                  <Badge key={day} color="black" size="md" variant="light">
                    {day}
                  </Badge>
                );
              })}
            </Group>
          </Stack>

          <Stack gap={gap}>
            <SimpleGrid cols={2}>
              <Stack>
                <Title order={5}>Daily Start Time</Title>
                <Group gap={4} align="center">
                  {/* <IconClock size={20} color="gray" /> */}
                  <Text>{job?.dailyStartTime}</Text>
                </Group>
              </Stack>
              <Stack>
                <Title order={5}>Daily End Time</Title>
                <Group gap={4} align="center">
                  {/* <IconClock size={20} color="gray" /> */}
                  <Text>{job?.dailyFinishTime}</Text>
                </Group>
              </Stack>
            </SimpleGrid>
          </Stack>

          <Select
            label="Change Status"
            placeholder={job?.status}
            data={["Approved", "Rejected"]}
            onChange={(value: string | null) => {
              if (value === "Approved" || value === "Rejected") {
                handleStatusChange(job?.id || "", {
                  status: value
                });
              }
            }}
          />
          <Button size="sm" variant="outline" onClick={onClose}>
            Close
          </Button>
        </Stack>
      )}
    </Drawer>
  );
};

export default CompanyJobDetailDrawer;
