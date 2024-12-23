import {
  Anchor,
  Button,
  Card,
  Checkbox,
  Container,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";

import * as yup from "yup";

import { useMediaQuery } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../contexts/AuthContext";
import { SignInDto } from "../../http/Api";
import http from "../../http";
function SignIn() {
  //Hooks
  const queryClient = useQueryClient();
  const { setAccessToken, setUser, accessToken } = useAuth();
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
        .required("Password is required")
    });
    const form = useForm<SignInDto>({
      initialValues: {
        email: "",
        password: ""
      },
      validate: yupResolver(schema)
    });
    const { mutate: signIn, isPending: loading } = useMutation({
      mutationFn: http.users.userControllerSignIn
    });

    async function handleSignInSubmit(values: SignInDto) {
      signIn(values, {
        onSuccess: async (data) => {
          setAccessToken(data.data.accessToken || "");

          if (data.data.user) {
            setUser(data.data.user);
          }

          queryClient.invalidateQueries({ queryKey: ["auth"] });
        }
      });
    }

    if (accessToken) {
      return <Navigate to="/" />;
    }

    return (
      <form onSubmit={form.onSubmit(handleSignInSubmit)}>
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
              <Button type="submit" fullWidth loading={loading}>
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
