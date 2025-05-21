import { Container, Group, Text, Divider,  } from "@mantine/core";
import PoliceLogo from "../../assets/icons/Logo";

export default function Footer() {
  return (
    <footer>
      <Divider />
      <Container size="md" py="md">
        <Group justify="center">
          <Group justify="apart" align="center">
            <Group gap="xs">
              <PoliceLogo height={25} width={25} />
              <Text size="sm" fw={500}>
                Punjab Police Recruitment Portal
              </Text>
            </Group>
            <Text size="sm" color="dimmed">
              © {new Date().getFullYear()} Punjab Police. All rights reserved.
            </Text>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
