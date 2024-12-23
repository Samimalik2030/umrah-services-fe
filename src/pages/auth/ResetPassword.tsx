import {
  Button,
  Card,
  Container,
  PasswordInput,
  Stack,
  Text,
  Title
} from "@mantine/core";

import { useNavigate, useLocation } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { ResetPasswordDto } from "../../http/Api";
import { notifications } from "@mantine/notifications";
import http from "../../http";
import { useMutation } from "@tanstack/react-query";

function ResetPassword() {
  //Hooks
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const resetPasswordMutation = useMutation({
    mutationFn: (data: ResetPasswordDto) =>
      http.users.userControllerResetPassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      notifications.show({
        title: "Success",
        message: "Password reset successfully",
        color: "green"
      });
      navigate("/auth/sign-in");
    }
  });

  const isSmall = useMediaQuery("(max-width: 768px)");
  // Form
  const ResetPasswordForm = () => {
    const location = useLocation();
    const { email, type, otp } = location.state || "";
    const schema = yup.object({
      password: yup.string().required("Password is required"),
      confirm_password: yup.string().required("Confirm Password is required")
    });
    // Form Hooks
    const form = useForm({
      mode: "uncontrolled",
      initialValues: {
        email: email,
        otp: otp,
        type: type,
        password: "",
        confirm_password: ""
      },
      validate: yupResolver(schema)
    });

    function handleResetPasswordSubmit(values: ResetPasswordDto) {
      resetPasswordMutation.mutate(values);
    }

    return (
      <form onSubmit={form.onSubmit(handleResetPasswordSubmit)}>
        <Stack align="center">
          <Stack gap={1}>
            <Title ta={"center"} order={1}>
              Reset Password
            </Title>
            <Text
              ta={isSmall ? "center" : "start"}
              size="lg"
              w={isSmall ? "" : "100%"}
            >
              Reset your password? Let’s get you back on the track.
            </Text>
          </Stack>

          <br />
          {/* form */}
          <Card shadow="none" w={isSmall ? "100%" : "60%"}>
            <Stack>
              <PasswordInput
                label="New Password"
                placeholder="Enter New Password"
                withAsterisk
                {...form.getInputProps("password")}
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm Password"
                withAsterisk
                {...form.getInputProps("confirm_password")}
              />
              <br />
              <Button
                type="submit"
                fullWidth
                loading={resetPasswordMutation.isPending}
              >
                Reset Password
              </Button>
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
        <ResetPasswordForm />
      </Stack>
    </Container>
  );
}

export default ResetPassword;
