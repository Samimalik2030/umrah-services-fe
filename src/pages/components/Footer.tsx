
import {
  Container,
  Group,
  Burger,
  Button,
  Text,
  Paper,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


export default function Footer() {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <Paper
      withBorder
      px="md"
      py="sm"
      radius={0}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        background: colorScheme === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
      }}
    >
      <Container size="xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Group gap="xs">
          {/* <IconRocket size={24} /> */}
          <Text fw={700} size="xl" style={{ letterSpacing: '1px' }}>
            NeoNav
          </Text>
        </Group>
        <Group gap="xs" visibleFrom="sm">
          <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} radius="xl">
            Sign In
          </Button>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
      </Container>
    </Paper>
  );
}
