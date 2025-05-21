import {
  Button,
  Card,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";

import { useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import http from "../../http";
import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordDTO } from "../../http/Api";

function ForgotPassword() {
  //Hooks
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const forgotPasswordMutation = useMutation({
    mutationFn: (data: ForgotPasswordDTO) =>
      http.auth.userControllerForgotPassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      notifications.show({
        title: "Success",
        message: "OTP sent to your email",
        color: "green",
      });
    },
  });

  const isSmall = useMediaQuery("(max-width: 768px)");

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
      type: "Forgot Password",
    },
    validate: yupResolver(schema),
  });

  async function handleVerifyEmailSubmit(values: ForgotPasswordDTO) {
    try {
      forgotPasswordMutation.mutate(values, {
        onSuccess() {
          navigate("/auth/verify-otp", {
            state: {
              email: values.email,
              type: "Forgot Password", // Add type for OTP verification
            },
          });
        },
      });
    } catch (error) {
      console.error("Forgot password error:", error);
    }
  }
  return (
    <Card p={"xl"} radius={"xl"} w={isSmall ? 350 : 500}>
      <form onSubmit={form.onSubmit(handleVerifyEmailSubmit)}>
        <Stack align="center" mx={"xl"}>
          <Stack gap={1} align="center">
            <Title ta={isSmall ? "center" : "start"} order={1}>
              Forgot Password
            </Title>
            <Text ta={"center"}> Enter email to recover your account</Text>
          </Stack>

          <TextInput
            type="email"
            label="Your Email"
            placeholder="Email"
            withAsterisk
            {...form.getInputProps("email")}
            w={"100%"}
            mt={24}
          />

          <Button type="submit" loading={forgotPasswordMutation.isPending} w={"100%"} mt={12}>
           Next
          </Button>
        </Stack>
      </form>
    </Card>
  );
}

export default ForgotPassword;
