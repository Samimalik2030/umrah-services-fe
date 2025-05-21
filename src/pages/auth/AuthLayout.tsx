import {
  Center,
  Container,
  Image,
  Grid,
  Group,
  Text,
  Button,
} from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PoiceLogo from "../../assets/icons/Logo";
function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignInPage = location.pathname === "/auth/sign-in";
  const isSignUpPage = location.pathname === "/auth/sign-up";
  const isSmallScreen = useMediaQuery("(max-width: 56.25em)");
  

  const hanleClick = () => {
    if (isSignInPage) {
      navigate("/auth/sign-up");
    } else {
      navigate("/auth/sign-in");
    }
  };
  return (
    <Container fluid h={"100vh"} w={"100vw"}>
      <Grid h={"100vh"} w={"100%"} m={0} p={0} >
        <Grid.Col span={isSmallScreen ? 12 : 6} display={isSmallScreen?"none":"block"}>
          <Center h={"100%"} w={"100%"}>
            <Image
              src={
                "https://ik.imagekit.io/yzrrrgg3d/side-logo.png?updatedAt=1747398224128"
              }
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={isSmallScreen ? 12 : 6}  h={"100vh"} style={{
            overflowY: "auto",
        }}>
          <Group justify="end" mt={12}>
            <Text size="sm">
              {isSignInPage
                ? "Dont have an account?"
                : "Already have an account?"}
            </Text>
            <Button size="xs" onClick={() => hanleClick()}>
              {isSignInPage ? "Sign Up" : "Sign In"}
            </Button>
          </Group>
          <Group justify="center">
            <PoiceLogo
              height={isSignUpPage ? 75 : 100}
              width={isSignUpPage ? 75 : 100}
            />
          </Group>
          <Center mt={isSignUpPage ? 6 : 12}>
            <Outlet />
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default AuthLayout;
