import {
  Anchor,
  Button,
  Card,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
import IconArrowNarrowLeft from "../../assets/icons/IconArrowNarrowLeft";
import { useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import http from "../../http";
import { ForgotPasswordDto } from "../../http/Api";
import { useMutation } from "@tanstack/react-query";

function ForgotPassword() {
  //Hooks
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const forgotPasswordMutation = useMutation({
    mutationFn: (data: ForgotPasswordDto) =>
      http.users.userControllerForgotPassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      notifications.show({
        title: "Success",
        message: "OTP sent to your email",
        color: "green"
      });
    }
  });

  const isSmall = useMediaQuery("(max-width: 768px)");

  // Form
  const ForgotPasswordForm = () => {
    const schema = yup.object({
      email: yup
        .string()
        .trim()
        .email("Invalid email address")
        .required("Email is required")
    });
    // Form Hooks

    const form = useForm({
      mode: "uncontrolled",
      initialValues: {
        email: ""
      },
      validate: yupResolver(schema)
    });

    async function handleVerifyEmailSubmit(values: ForgotPasswordDto) {
      try {
        forgotPasswordMutation.mutate(values, {
          onSuccess() {
            navigate("/auth/verify-otp", {
              state: {
                email: values.email,
                type: "Reset Password" // Add type for OTP verification
              }
            });
          }
        });
      } catch (error) {
        console.error("Forgot password error:", error);
      }
    }

    return (
      <form onSubmit={form.onSubmit(handleVerifyEmailSubmit)}>
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
                <Button
                  type="submit"
                  loading={forgotPasswordMutation.isPending}
                >
                  Reset password
                </Button>
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
