import {
  Box,
  Button,
  Card,
  Container,
  Group,
  PasswordInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { useNavigate, useLocation } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";

function ResetPassword() {
  //Hooks
  const navigate = useNavigate();

  const isSmall = useMediaQuery("(max-width: 768px)");
  // Form
  const ResetPasswordForm = () => {
    const location = useLocation();
    const { email, type, otp } = location.state || "";
    const schema = yup.object({
      password: yup.string().required("Password is required"),
      confirm_password: yup.string().required("Confirm Password is required"),
    });
    // Form Hooks
    const form = useForm({
      mode: "uncontrolled",
      initialValues: {
        email: email,
        otp: otp,
        type: type,
        password: "",
        confirm_password: "",
      },
      validate: yupResolver(schema),
    });

    return (
      <form onSubmit={form.onSubmit(() => navigate("/"))}>
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
              <Button type="submit" fullWidth>
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
