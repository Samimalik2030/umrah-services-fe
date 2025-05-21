import {
  Card,
  Text,
  Badge,
  Group,
  Stack,
  Divider,
  Box,
  ThemeIcon,
  Button,
  Tooltip,
} from "@mantine/core";
import IconUsersGroup from "../../assets/icons/IconUsersGroup";
import IconUserFilled from "../../assets/icons/IconUserFilled";
import IconChartHistogram from "../../assets/icons/IconChartHistogram";
import IconBell from "../../assets/icons/IconBell";
import IconDots from "../../assets/icons/IconDots";
import IconRulerMeasureOutlined from "../../assets/icons/IconRulerMeasureOutlined";
import IconRulerMeasure2 from "../../assets/icons/RulerMeasure";
import IconBook from "../../assets/icons/IconBook";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconClock from "../../assets/icons/IconClock";

interface JobCardProps {
  job: {
    title: string;
    description: string;
    vacancies: number;
    bps: number;
    gender: string[];
    age_min: number;
    age_max: number;
    height_male: number;
    height_female: number;
    chest_male: string;
    chest_female: string;
    education: string;
    application_deadline: string | Date | null;
    posting_date: string | Date;
    application_fee: number;
    terms_and_conditions: string;
  };
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card
      shadow="md"
      padding="lg"
      radius="md"
      withBorder
      style={{ maxWidth: 600, margin: "auto" }}
    >
      <Group justify="apart" mb="sm">
        <Text fw={700} size="xl" lineClamp={1}>
          {job.title}
        </Text>
        <Badge color="cyan" variant="light" size="lg">
          BPS-{job.bps}
        </Badge>
      </Group>

      <Text c="dimmed" size="sm" mb="md" lineClamp={4}>
        {job.description}
      </Text>

      <Divider my="sm" />

      <Stack gap="xs" mb="md">
        <Group gap="xs">
          <ThemeIcon color="blue" variant="light" size={28}>
            <IconUsersGroup size={18} />
          </ThemeIcon>
          <Text>
            <strong>Vacancies:</strong> {job.vacancies}
          </Text>
        </Group>

        <Group gap="xs">
          <ThemeIcon color="orange" variant="light" size={28}>
            <IconBook size={18} />
          </ThemeIcon>
          <Text>
            <strong>Education:</strong> {job.education}
          </Text>
        </Group>

        <Group gap="xs">
          <ThemeIcon color="red" variant="light" size={28}>
            <Text style={{ fontFamily: "cursive" }}>Rs</Text>
          </ThemeIcon>
          <Text>
            <strong>Application Fee:</strong> PKR {job.application_fee}
          </Text>
        </Group>

        <Group gap="xs">
          <ThemeIcon color="green" variant="light" size={28}>
            <IconCalendar size={18} />
          </ThemeIcon>
          <Text>
            <strong>Application Deadline:</strong>{" "}
            {job.application_deadline
              ? new Date(job.application_deadline).toLocaleDateString()
              : "N/A"}
          </Text>
        </Group>

        <Group gap="xs">
          <ThemeIcon color="orange" variant="light" size={28}>
            <IconClock size={18} />
          </ThemeIcon>
          <Text>
            <strong>Age Limit:</strong> {job.age_min} - {job.age_max} years
          </Text>
        </Group>
      </Stack>

      <Divider my="sm" />

      {/* <Box
        style={(theme) => ({
          backgroundColor: theme.colors.gray[0],
          padding: 12,
          borderRadius: theme.radius.sm,
          maxHeight: 100,
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          fontSize: theme.fontSizes.sm,
          color: theme.colors.dark[6],
          position: "relative",
        })}
      >
        <Group mb="xs" gap={4} align="center">
          <ThemeIcon color="blue" variant="light" size={20}>
            <IconBell size={14} />
          </ThemeIcon>
          <Text fw={600} size="sm">
            Terms & Conditions
          </Text>
        </Group>
        {job.terms_and_conditions}
      </Box> */}

      <Group justify="right" mt="md" gap="sm">
        <Tooltip label="Apply for this job" position="top" withArrow>
          <Button>
            Apply Now
          </Button>
        </Tooltip>
        <Tooltip label="View more details" position="top" withArrow>
          <Button variant="outline" >
            Details
          </Button>
        </Tooltip>
      </Group>
    </Card>
  );
}
