import { Button, Container, Group, Stack, Title } from "@mantine/core";

const Services = () => {
  return (
    <>
      <Container fluid>
        <Stack>
          <Group justify="space-between">
            <Title order={2}>Services</Title>
            <Button>Add Service</Button>
          </Group>
        </Stack>
      </Container>
    </>
  );
};

export default Services;
