import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
// import IconEmailFilled from "../../assets/icons/IconEmailFilled";

function TwoFactorAuth() {
  //Hooks

  const isSmall = useMediaQuery("(max-width: 768px)");
  // Form
  const TwoFactorAuthForm = () => {
    const schema = yup.object({
      twoFactorType: yup.string().trim(),
    });
    // Form Hooks
    const form = useForm({
      mode: "uncontrolled",
      initialValues: {
        twoFactorType: { value: [] },
      },
      validate: yupResolver(schema),
    });

    return (
      <form>
        <Stack align="center">
          <Stack gap={1}>
            <Title ta={isSmall ? "center" : "start"} order={1}>
              Two Factor Authentication
            </Title>
            <Text ta={"center"} size="lg" w={"100%"}>
              Boost your account security
            </Text>
          </Stack>
          <br />
          {/* form */}
          <Card shadow="none" w={isSmall ? "100%" : "60%"}>
            <Stack>
              <Checkbox.Card
                radius="md"
                p={"xs"}
                {...form.getInputProps("twoFactorType")}
              >
                <Group gap={"xs"} justify="space-between">
                  <Group>
                    <Checkbox.Indicator size="md" />
                    <Stack gap={0}>
                      <Text fw={600}>Email</Text>
                      <Text size="sm" c="dimmed">
                        Get a code sent to your email
                      </Text>
                    </Stack>
                  </Group>
                  <Box>
                    {/* <IconEmailFilled size={32} color="black" /> */}
                  </Box>
                </Group>
              </Checkbox.Card>
              <br />
              <Button type="submit" fullWidth>
                Continue
              </Button>
              <Button variant="outline" fullWidth>
                Cancel
              </Button>
            </Stack>
            <br />
          </Card>
        </Stack>
      </form>
    );
  };

  // Template
  return (
    <Container>
      <Stack h={"100vh"} w={"100%"} justify="center">
        <TwoFactorAuthForm />
      </Stack>
    </Container>
  );
}

export default TwoFactorAuth;
