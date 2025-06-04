import { Button, Card, PasswordInput, Stack, Text, Title } from "@mantine/core";

import { useNavigate, useLocation } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import http from "../../http";
import { useMutation } from "@tanstack/react-query";
import { ResetPasswordDTO } from "../../http/Api";

function ResetPassword() {
  //Hooks
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const resetPasswordMutation = useMutation({
    mutationFn: (data: ResetPasswordDTO) =>
      http.auth.userControllerResetPassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      notifications.show({
        title: "Success",
        message: "Password reset successfully",
        color: "green",
      });
      navigate("/auth/sign-in");
    },
  });

  const isSmall = useMediaQuery("(max-width: 768px)");

  const location = useLocation();
  const { email, otp } = location.state || "";
  const schema = yup.object({
    password: yup
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });
  // Form Hooks
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: email,
      otp: otp,
      password: "",
      confirmPassword: "",
    },
    validate: yupResolver(schema),
  });

  function handleResetPasswordSubmit(values: ResetPasswordDTO) {
    resetPasswordMutation.mutate(values);
  }

  // Template
  return (
    <Card p={"xl"} radius={"xl"} w={isSmall ? 350 : 500}>
      <form onSubmit={form.onSubmit(handleResetPasswordSubmit)}>
        <Stack align="center" mx={"xl"}>
          <Stack gap={1} align="center">
            <Title ta={isSmall ? "center" : "start"} order={1}>
              Reset Password
            </Title>
            <Text ta={"center"}>
              Reset your password? Let’s get you back on the track.
            </Text>
          </Stack>
          <br />

          <Stack w={"100%"}>
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
              {...form.getInputProps("confirmPassword")}
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
        </Stack>
      </form>
    </Card>
  );
}

export default ResetPassword;
