import {
  Anchor,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";

import * as yup from "yup";

import { useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
function SignIn() {
  //Hooks
  const navigate = useNavigate();

  const isSmall = useMediaQuery("(max-width: 768px)");

  // Form
  const SignInForm = () => {
    const schema = yup.object({
      email: yup
        .string()
        .trim()
        .email("Invalid email address")
        .required("Email is required"),
      password: yup
        .string()
        .trim()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
    });
    const form = useForm({
      initialValues: {
        email: "",
        password: "",
      },
      validate: yupResolver(schema),
    });

    return (
      <form>
        <Stack align="center" mx={"xl"}>
          <Stack gap={1} align="center">
            <Title ta={isSmall ? "center" : "start"} order={1}>
              Welcome Back!
            </Title>
            <Text ta={"center"} size="lg" w={"100%"}>
              Enter your credentials to sign in
            </Text>
          </Stack>
          <br />
          {/* form */}
          <Card shadow="none" w={isSmall ? "100%" : "60%"}>
            <Stack>
              <TextInput
                label="Your Email"
                type="email"
                placeholder="Email"
                withAsterisk
                {...form.getInputProps("email")}
              />
              <PasswordInput
                label="Password"
                placeholder="Enter Your Password"
                withAsterisk
                {...form.getInputProps("password")}
              />
              <Group justify={"space-between"}>
                <Checkbox label="Remember Me?" mt="md" />
                <Anchor
                  underline="always"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </Anchor>
              </Group>
              <br />
              <Button type="submit" fullWidth>
                Sign In
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
        <SignInForm />
      </Stack>
    </Container>
  );
}

export default SignIn;
