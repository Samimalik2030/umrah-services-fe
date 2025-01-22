import {
  Badge,
  Button,
  Drawer,
  Group,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import dayjs from "dayjs";

import { useGetJob, usePatchJobStatus } from "../../hooks/useGetJobs";
import { UpdateJobStatusDTO } from "../../http/Api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";

type JobDetailsDrawerProps = {
  opened: boolean;
  onClose: () => void;
  id: string | null;
};

const CompanyJobDetailDrawer = ({
  opened,
  onClose,
  id,
}: JobDetailsDrawerProps) => {
  const gap = 8;
  const { job, isLoading: jobLoading } = useGetJob(id ?? "");
  const queryClient = useQueryClient();
  const { mutate: changeJobStatus, isPending } = useMutation({
    mutationKey: ["changeStatusJob"],
    mutationFn: ({ id, data }: { id: string; data: UpdateJobStatusDTO }) =>
      http.jobs.jobControllerPatchStatus(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });

  const handleStatusChange = (id: string, data: UpdateJobStatusDTO) => {
    changeJobStatus({ id, data });
  };

  return (
    <Drawer
      size="md"
      opened={opened}
      onClose={onClose}
      position="right"
      withCloseButton={false}
    >
      {jobLoading ? (
        <Stack>
          <Skeleton height={50} circle animate />
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} height={50} animate />
          ))}
        </Stack>
      ) : (
        <Stack gap="xl" p="md">
          <Stack gap={gap}>
            <Title order={4}>{job?.title}</Title>
            {job?.isArchived && <Badge color="red">Archived</Badge>}
          </Stack>

          <Stack gap={gap}>
            <Title order={5}>Description</Title>
            <Text opacity={0.7}>{job?.description}</Text>
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
            placeholder={"Status"}
            data={["Pending For Approval", "Approved", "Rejected"]}
            onChange={(value: any) => {
              console.log("value", value);

              handleStatusChange(job?.id || "", {
                status: value,
              });
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
