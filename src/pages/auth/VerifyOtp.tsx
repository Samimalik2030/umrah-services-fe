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
  Title,
} from "@mantine/core";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import { useMediaQuery } from "@mantine/hooks";
import IconArrowNarrowLeft from "../../assets/icons/IconArrowNarrowLeft";
function VerifyOtp() {
  //Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const isSmall = useMediaQuery("(max-width: 768px)");
  const { email } = location.state || "";

  // Form
  const VerifyOTPForm = () => {
    const schema = yup.object({
      otp: yup.string().required("OTP is required"),
    });
    // Form Hooks
    const form = useForm({
      mode: "uncontrolled",
      initialValues: {
        email: email,
        otp: "",
        type: "Reset Password" as const,
      },
      validate: yupResolver(schema),
    });

    return (
      <form onSubmit={form.onSubmit(() => navigate("/reset-password"))}>
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
                <Button type="submit">Verify OTP</Button>
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
