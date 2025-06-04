import {
  Card,
  Button,
  Flex,
  ActionIcon,
  Avatar,
  Group,
  Menu,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Role } from "../../interfaces/ICommonIconProps";
import IconLogout from "../../assets/icons/IconLogout";
import IconSettings from "../../assets/icons/IconSettings";
import getInitials from "../../utils/getInitials";

function MyNavbar() {
  const largeScreen = useMediaQuery("(min-width: 56.25em)");
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleNavigate = () => {
    if (user?.role === Role.ADMIN) {
      navigate("/dashboard");
    } else if (user?.role === Role.CITY_MANAGER) {
      navigate("/dashbaord/my-recruiters");
    } else if (user?.role === Role.SALESMAN) {
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
        gap={'lg'}
      >
        <Text fw={900}>Logo</Text>

        {!user ? (
          <Flex gap="xs" pr={largeScreen ? 0 : 10}>
            <Button onClick={() => navigate("/auth/sign-in")}>LOG IN</Button>
            <Button onClick={() => navigate("/auth/sign-up")}>SIGN UP</Button>
          </Flex>
        ) : (
          user.role !== Role.CUSTOMER && (
            <Button onClick={() => handleNavigate()}>Dashboard</Button>
          )
        )}
        {user && user.role === Role.CUSTOMER && (
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
