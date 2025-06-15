import {
  Card,
  Button,
  Flex,
  Group,
  Image,
  Anchor,
  Center
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Role } from "../../interfaces/ICommonIconProps";

function MyNavbar() {
  const isSmallScreen = useMediaQuery("(max-width: 56.25em)");

  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleNavigate = () => {
    if (user?.role === Role.ADMIN) {
      navigate("/dashboard");
    } else if (user?.role === Role.CITY_MANAGER) {
      navigate("/dashbaord/service-requests");
    } else if (user?.role === Role.SALESMAN) {
      navigate("/dashboard/city-salemans");
    } else {
      return;
    }
  };

  //  if (user?.role === Role.ADMIN) {
  //     return <Navigate to="/dashboard" />;
  //   } else if (user?.role === Role.DISTRICT_OFFICER) {
  //     return <Navigate to="/dashboard/my-recruiters" />;
  //   } else if (user?.role === Role.RECRUITER) {
  //     return <Navigate to="/dashboard/district-candidates" />;
  //   }
  return (
    <Card bg={"green"}  h={90} p={20} shadow="xl" radius={0}>
                <Center w={"100%"} h={"100%"}>
                  <Flex
                    justify={"space-between"}
                    wrap={"wrap"}
                    align={"center"}
                    w={"100%"}
                  >
                    <Image
                      w={275}
                      src={
                        "https://ik.imagekit.io/yzrrrgg3d/professional/horizontal-removebg-preview%20(1).png?updatedAt=1749904445628"
                      }
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/")}
                    />
  
                    <Flex gap={30}>
                      <Anchor
                        c={"white"}
                        onClick={() => {
                          const aboutSection =
                            document.getElementById("services");
                          aboutSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                        fz={isSmallScreen ? 14 : 16}
                      >
                        Our Services
                      </Anchor>
                      <Anchor
                        c={"white"}
                        onClick={() => {
                          const aboutSection =
                            document.getElementById("about-us");
                          aboutSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                        fz={isSmallScreen ? 14 : 16}
                      >
                        About Us
                      </Anchor>
                      <Anchor
                        c={"white"}
                        onClick={() => {
                          const aboutSection =
                            document.getElementById("services");
                          aboutSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                        fz={isSmallScreen ? 14 : 16}
                      >
                        Become Professional
                      </Anchor>
                       <Anchor
                        c={"white"}
                        onClick={() => {
                          const aboutSection =
                            document.getElementById("services");
                          aboutSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                        fz={isSmallScreen ? 14 : 16}
                      >
                        Browse Jobs
                      </Anchor>
                    </Flex>
  
                    <Flex gap={10} mt={isSmallScreen ? 24 : 0}>
                      {user ? (
                        <Group>
                          <Button
                            variant="outline"
                            color="white"
                            onClick={() => {
                              if (user?.role === Role.ADMIN) {
                                navigate("/dashboard");
                              } else if (user?.role === Role.CITY_MANAGER) {
                                navigate("/dashboard/city-salesmans");
                              } else if (user?.role === Role.SALESMAN) {
                                navigate("/dashboard/professionals");
                              } else {
                                return <Navigate to="/" />;
                              }
                            }}
                          >
                            Dashboard
                          </Button>
                        </Group>
                      ) : (
                        <Button
                          onClick={() => navigate("/auth/sign-in")}
                          bg={"#309945"}
                          c={"white"}
                          size={isSmallScreen ? "sm" : "md"}
                          w={150}
                        >
                          Login
                        </Button>
                      )}
  
                      {!user && (
                        <Button
                          bg={"transparent"}
                          style={{ border: "2px solid white" }}
                          onClick={() => navigate("/auth/sign-up")}
                          size={isSmallScreen ? "sm" : "md"}
                        >
                          GET STARTED
                        </Button>
                      )}
                    </Flex>
                  </Flex>
                </Center>
              </Card>
  );
}

export default MyNavbar;
