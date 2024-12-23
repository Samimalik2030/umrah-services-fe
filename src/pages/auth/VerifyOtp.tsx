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

import { useLocation, useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
import IconArrowNarrowLeft from "../../assets/icons/IconArrowNarrowLeft";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../http";
import { notifications } from "@mantine/notifications";
import { VerifyOtpDto } from "../../http/Api";
function VerifyOtp() {
  //Hooks
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const isSmall = useMediaQuery("(max-width: 768px)");
  const { email } = location.state || "";

  const verifyOtpMutation = useMutation({
    mutationFn: (data: VerifyOtpDto) =>
      http.users.userControllerVerifyOtp(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      notifications.show({
        title: "Success",
        message: "OTP verified successfully",
        color: "green"
      });
    }
  });

  // Form
  const VerifyOTPForm = () => {
    const schema = yup.object({
      otp: yup.string().required("OTP is required")
    });
    // Form Hooks
    const form = useForm({
      mode: "uncontrolled",
      initialValues: {
        email: email,
        otp: "",
        type: "Reset Password" as const
      },
      validate: yupResolver(schema)
    });

    async function handleVerifyOTPSubmit(values: VerifyOtpDto) {
      try {
        verifyOtpMutation.mutate(values, {
          onSuccess() {
            navigate("/auth/reset-password", {
              state: {
                email: email,
                otp: values.otp,
                type: "Reset Password" // Add type for OTP verification
              }
            });
          }
        });
      } catch (error) {
        console.error("Verify OTP error:", error);
      }
    }

    return (
      <form onSubmit={form.onSubmit(handleVerifyOTPSubmit)}>
        <Stack align="center" mx={"xl"}>
          <Stack gap={1} align="center">
            <Title ta={isSmall ? "center" : "start"} order={1}>
              Verify OTP
            </Title>
            <Text ta={isSmall ? "center" : "start"} size="lg">
              Enter the otp sent to your email
            </Text>
          </Stack>
          <br />
          {/* form */}
          <Card shadow="none" w={isSmall ? "100%" : "60%"}>
            <Stack>
              <TextInput
                label="Enter OTP"
                placeholder="Enter 6-digit code"
                withAsterisk
                {...form.getInputProps("otp")}
                maxLength={6}
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
                <Button type="submit" loading={verifyOtpMutation.isPending}>
                  Verify OTP
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
        <VerifyOTPForm />
      </Stack>
    </Container>
  );
}

export default VerifyOtp;
