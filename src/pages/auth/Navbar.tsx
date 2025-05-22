import { Card, Button, Flex, Anchor, ActionIcon, Avatar, Group, Menu, Stack ,Text} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import PoliceLogo from "../../assets/icons/Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Role } from "../../interfaces/ICommonIconProps";
import IconLogout from "../../assets/icons/IconLogout";
import IconSettings from "../../assets/icons/IconSettings";
import getInitials from "../../utils/getInitials";

function MyNavbar() {
  const largeScreen = useMediaQuery("(min-width: 56.25em)");
  const navigate = useNavigate();
  const { user,logout } = useAuth();
  const location = useLocation();
  const handleNavigate = () => {
    if (user?.role === Role.ADMIN) {
      navigate("/dashboard");
    } else if (user?.role === Role.DISTRICT_OFFICER) {
      navigate("/dashbaord/my-recruiters");
    } else if (user?.role === Role.RECRUITER) {
      navigate("/dashboard/district-candidates");
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
    <Card px={100}>
      <Flex
        justify={"space-between"}
        align={"center"}
        // bg={"blue"}
      >
        <PoliceLogo height={50} width={50} />

        <Flex
          gap={largeScreen ? 30 : 0}
          display={largeScreen ? "flex" : "none"}
        >
          <Anchor
            c={location.pathname === "/" ? "green" : "black"}
            fz={18}
            fw={location.pathname === "/" ? 700 : 500}
            onClick={() => navigate("/")}
          >
            Home
          </Anchor>
          <Anchor
            c={location.pathname.includes("/jobs") ? "green" : "black"}
            fz={18}
            fw={location.pathname.includes("/jobs") ? 700 : 500}
            onClick={() => navigate("/jobs")}
          >
            Jobs
          </Anchor>
          {user?.role === Role.CANDIDATE && (
            <Anchor
              c={location.pathname.includes("/my-jobs") ? "green" : "black"}
              fz={18}
              fw={location.pathname.includes("/my-jobs") ? 700 : 500}
              onClick={() => navigate("/my-jobs")}
            >
              My Jobs
            </Anchor>
          )}
        </Flex>

        {!user ? (
          <Flex gap="xs" pr={largeScreen ? 0 : 10}>
            <Button onClick={() => navigate("/auth/sign-in")}>LOG IN</Button>
            <Button onClick={() => navigate("/auth/sign-up")}>SIGN UP</Button>
          </Flex>
        ) : (
          user.role !== Role.CANDIDATE && (
            <Button onClick={() => handleNavigate()}>Dashboard</Button>
          )
        )}
        {user && user.role === Role.CANDIDATE && (
          <Group>
            <Menu>
              <Menu.Target>
                <ActionIcon variant="subtle" size={"lg"}>
                  <IconSettings withOutline fill="none" size={32} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>
                  <Group>
                    <Avatar
                      size={52}
                      src={
                        user && user.profileImage ? user.profileImage.url : ""
                      }
                    />
                    <Stack gap={0}>
                      <Text>{user?.email}</Text>
                      <Text>{user?.fullName}</Text>
                    </Stack>
                  </Group>
                </Menu.Label>
                <Menu.Divider />
                <Menu.Item
                  onClick={() => navigate("/stepper")}
                  leftSection={<IconSettings fill="none" withOutline />}
                >
                  Profile Settings
                </Menu.Item>
                <Menu.Item
                  onClick={logout}
                  color="red"
                  leftSection={<IconLogout fill="none" color="red" />}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Avatar
              size={"lg"}
              src={user && user.profileImage ? user.profileImage.url : ""}
              name={getInitials(user?.fullName ?? "")}
            />
          </Group>
        )}
      </Flex>
    </Card>
  );
}

export default MyNavbar;
