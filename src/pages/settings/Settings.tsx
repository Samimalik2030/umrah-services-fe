"use client";
import { Paper, Stack, Title } from "@mantine/core";
import { AvatarCard } from "./ProfileCard";
import PersonalInfoCard from "./PersonalInfoCard";

export function Settings() {
  return (
    <Paper shadow="md" p="lg" radius="md" maw={700}>
      <Title order={2} mb="xl">
        Personal Settings
      </Title>
      <Stack gap="xl">
        <AvatarCard />
        <PersonalInfoCard />
      </Stack>
    </Paper>
  );
}
