import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";

import * as yup from "yup";

import { useMediaQuery } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../contexts/AuthContext";
import {  SignUpDto } from "../../http/Api";
import http from "../../http";
function SignUp() {
  const queryClient = useQueryClient();
  const { setAccessToken, setUser, accessToken } = useAuth();
  const navigate = useNavigate();
  const isSmall = useMediaQuery("(max-width: 768px)");
  const schema = yup.object({
    fullName: yup
      .string()
      .trim()
      .min(3, "Full Name must be at least 3 characters long")
      .required("Full Name is required"),

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

    confirmPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });
  const form = useForm<SignUpDto>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: yupResolver(schema),
  });
  const { mutate: signUp, isPending: loading } = useMutation({
    mutationFn: http.auth.userControllerSignUp,
  });

  async function handleSignUpSubmit(values: SignUpDto) {
    signUp(values, {
      onSuccess: async (data) => {
        setAccessToken(data.data.accessToken || "");
        if (data.data.user) {
          setUser(data.data.user);
        }
        queryClient.invalidateQueries({ queryKey: ["auth"] });
      },
    });
  }

  if (accessToken) {
    return <Navigate to="/stepper" />;
  }
  return (
    <Card px={isSmall?"xs":"xl"} py={"md"} radius={"xl"} w={isSmall ? 350 : 500}>
      <form onSubmit={form.onSubmit(handleSignUpSubmit)}>
        <Stack align="center" mx={isSmall?"xs":"xl"} gap={0}>
          <Stack gap={1} align="center">
            <Title ta={isSmall ? "center" : "start"} order={1}>
              Welcome!
            </Title>
            <Text ta={"center"}>Enter your Information to sign up</Text>
          </Stack>

          <Stack gap={"sm"} w={"100%"}>
            <TextInput
              label="Your Name"
              placeholder="Full Name"
              withAsterisk
              {...form.getInputProps("fullName")}
              size="sm"
            />
            <TextInput
              label="Your Email"
              type="email"
              placeholder="Email"
              withAsterisk
              size="sm"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter Your Password"
              withAsterisk
              size="sm"
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Enter Your Confirm Password"
              withAsterisk
              size="sm"
              {...form.getInputProps("confirmPassword")}
            />
            <Group justify={"space-between"} align="center">
              <Checkbox label="Remember Me?" />
              <Anchor
                underline="always"
                onClick={() => navigate("/auth/forgot-password")}
              >
                Forgot Password?
              </Anchor>
            </Group>
            <br />
            <Button type="submit" fullWidth loading={loading}>
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </form>
    </Card>
  );
}

export default SignUp;
