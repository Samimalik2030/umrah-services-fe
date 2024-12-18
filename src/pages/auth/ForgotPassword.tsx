import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
import IconArrowNarrowLeft from "../../assets/icons/IconArrowNarrowLeft";

function ForgotPassword() {
  //Hooks
  const navigate = useNavigate();

  const isSmall = useMediaQuery("(max-width: 768px)");

  // Form
  const ForgotPasswordForm = () => {
    const schema = yup.object({
      email: yup
        .string()
        .trim()
        .email("Invalid email address")
        .required("Email is required"),
    });
    // Form Hooks

    const form = useForm({
      mode: "uncontrolled",
      initialValues: {
        email: "",
      },
      validate: yupResolver(schema),
    });

    return (
      <form onSubmit={form.onSubmit(() => navigate("/verify-otp"))}>
        <Stack align="center" mx={"xl"}>
          <Stack gap={1} align="center">
            <Title ta={isSmall ? "center" : "start"} order={1}>
              Forgot Password
            </Title>
            <Text ta={isSmall ? "center" : "start"} size="lg">
              Enter your email to get a reset link
            </Text>
          </Stack>
          <br />
          {/* form */}
          <Card shadow="none" w={isSmall ? "100%" : "60%"}>
            <Stack>
              <TextInput
                type="email"
                label="Your Email"
                placeholder="Email"
                withAsterisk
                {...form.getInputProps("email")}
              />

              <br />
              <Flex
                direction={isSmall ? "column" : "row"}
                justify="space-between"
                align={"center"}
              >
                <Group gap={"xs"}>
                  <IconArrowNarrowLeft color="#808080" />
                  <Anchor
                    c={"#808080"}
                    underline="never"
                    onClick={() => navigate("/")}
                  >
                    Back to login page
                  </Anchor>
                </Group>
                <Button type="submit">Reset password</Button>
              </Flex>
            </Stack>
          </Card>
        </Stack>
      </form>
    );
  };

  // Template
  return (
    <Container>
      <Stack h={"100vh"} w={"100%"} justify="center">
        <ForgotPasswordForm />
      </Stack>
    </Container>
  );
}

export default ForgotPassword;
