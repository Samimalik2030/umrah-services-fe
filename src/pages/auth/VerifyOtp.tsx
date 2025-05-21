import { Button, Card, Stack, Text, TextInput, Title } from "@mantine/core";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { notifications } from "@mantine/notifications";
import { VerifyOtpDTO } from "../../http/Api";

function VerifyOtp() {
  // Hooks
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const isSmall = useMediaQuery("(max-width: 768px)");
  const { email } = location.state || {};

  // Mutation
  const verifyOtpMutation = useMutation({
    mutationFn: (data: VerifyOtpDTO) =>
      http.auth.userControllerVerifyOtp(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      notifications.show({
        title: "Success",
        message: "OTP verified successfully",
        color: "green",
      });
    },
  });

  // Schema
  const schema = yup.object({
    otp: yup.string().required("OTP is required"),
  });

  // Form
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email,
      otp: "",
      type: "Forgot Password" as const,
    },
    validate: yupResolver(schema),
  });

  // Submit Handler
  async function handleVerifyOTPSubmit(values: VerifyOtpDTO) {
    try {
      verifyOtpMutation.mutate(values, {
        onSuccess() {
          navigate("/auth/reset-password", {
            state: {
              email,
              otp: values.otp,
              type: "Forgot Password",
            },
          });
        },
      });
    } catch (error) {
      console.error("Verify OTP error:", error);
    }
  }

  return (
    <Card p="xl" radius="xl" w={isSmall ? 350 : 500}>
      <form onSubmit={form.onSubmit(handleVerifyOTPSubmit)}>
        <Stack align="center" mx="xl">
          <Stack gap={1} align="center">
            <Title ta={isSmall ? "center" : "start"} order={1}>
              Verify OTP
            </Title>
            <Text ta="center">Enter the OTP sent to your email</Text>
          </Stack>

          <TextInput
            label="OTP"
            placeholder="Enter OTP"
            withAsterisk
            {...form.getInputProps("otp")}
            w="100%"
            mt={24}
          />

          <Button
            type="submit"
            loading={verifyOtpMutation.isPending}
            w="100%"
            mt={12}
          >
            Next
          </Button>
          <Button variant="outline" w="100%">
            Resend OTP
          </Button>
        </Stack>
      </form>
    </Card>
  );
}

export default VerifyOtp;
