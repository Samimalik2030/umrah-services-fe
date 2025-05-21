import {
  Card,
  Text,
  Group,
  Stack,
  Divider,
  Box,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import IconUserFilled from "../../assets/icons/IconUserFilled";
import IconBadge from "../../assets/icons/IconBadge";
import RulerMeasure from "../../assets/icons/RulerMeasure";
import IconBook from "../../assets/icons/IconBook";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconRulerMeasureOutlined from "../../assets/icons/IconRulerMeasureOutlined";
import IconRulerMeasure2 from "../../assets/icons/RulerMeasure";

export function JobDetails({ job }: { job: any }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="lg">
        <Text size="xl" fw={700} ta="center" mb="sm">
          {job.title}
        </Text>

        <Text size="md" color="dimmed" style={{ whiteSpace: "pre-wrap" }}>
          {job.description}
        </Text>

        <Divider label="Basic Info" my="md" />

        <SimpleGrid cols={{
          base: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 3,
        }} spacing="md">
          <Group gap={8}>
            <ThemeIcon color="cyan" variant="light" size={28}>
              <IconUserFilled size={18} />
            </ThemeIcon>
            <Text>
              <strong>Vacancies:</strong> {job.vacancies}
            </Text>
          </Group>

          <Group gap={8}>
            <ThemeIcon color="teal" variant="light" size={28}>
              <IconBadge size={18} />
            </ThemeIcon>
            <Text>
              <strong>BPS:</strong> {job.bps}
            </Text>
          </Group>

          <Group gap={8}>
            <ThemeIcon color="grape" variant="light" size={28}>
              <IconUserFilled size={18} />
            </ThemeIcon>
            <Text>
              <strong>Gender:</strong> {job.gender}
            </Text>
          </Group>

          <Group gap={8}>
            <ThemeIcon color="orange" variant="light" size={28}>
              <IconUserFilled size={18} />
            </ThemeIcon>
            <Text>
              <strong>Age Range:</strong> {job.age_min} - {job.age_max}
            </Text>
          </Group>

          <Group gap={8}>
            <ThemeIcon color="yellow" variant="light" size={28}>
              <IconRulerMeasure2 size={18} />
            </ThemeIcon>
            <Text>
              <strong>Height (Male):</strong> {job.height_male} cm
            </Text>
          </Group>

          <Group gap={8}>
            <ThemeIcon color="pink" variant="light" size={28}>
              <IconRulerMeasure2 size={18} />
            </ThemeIcon>
            <Text>
              <strong>Height (Female):</strong> {job.height_female} cm
            </Text>
          </Group>

          {job.chest_male && (
            <Group gap={8}>
              <ThemeIcon color="violet" variant="light" size={28}>
                <IconRulerMeasureOutlined color="#000063" />
              </ThemeIcon>
              <Text>
                <strong>Chest (Male):</strong> {job.chest_male}
              </Text>
            </Group>
          )}

          {job.chest_female && (
            <Group gap={8}>
              <ThemeIcon color="pink" variant="light" size={28}>
                <RulerMeasure size={18} />
              </ThemeIcon>
              <Text>
                <strong>Chest (Female):</strong> {job.chest_female}
              </Text>
            </Group>
          )}

          <Group gap={8}>
            <ThemeIcon color="blue" variant="light" size={28}>
              <IconBook size={18} />
            </ThemeIcon>
            <Text>
              <strong>Education:</strong> {job.education}
            </Text>
          </Group>

          <Group gap={8}>
            <ThemeIcon color="red" variant="light" size={28}>
              <Text style={{ fontFamily: "cursive" }}>Rs</Text>
            </ThemeIcon>
            <Text>
              <strong>Application Fee:</strong> PKR {job.application_fee}
            </Text>
          </Group>

          <Group gap={8}>
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

          <Group gap={8}>
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
        </SimpleGrid>

        <Divider label="Terms & Conditions" my="md" />

        <Box
          style={(theme) => ({
            backgroundColor: theme.colors.gray[0],
            padding: theme.spacing.md,
            borderRadius: theme.radius.sm,
            maxHeight: 150,
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            fontSize: theme.fontSizes.sm,
            color: theme.colors.dark[6],
          })}
        >
          {job.terms_and_conditions}
        </Box>
      </Stack>
    </Card>
  );
}
