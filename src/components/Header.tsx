import {
  ActionIcon,
  Avatar,
  Card,
  Group,
  Menu,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import IconBell from "../assets/icons/IconBell";
import getInitials from "../utils/getInitials";
import IconLogout from "../assets/icons/IconLogout";
import IconSettings from "../assets/icons/IconSettings";

function Header() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <Card w={"100%"} withBorder={false} shadow="xs" radius={0}>
      <Group justify="space-between" align="center">
        <Group justify="center" align="center" visibleFrom="md">
          <Avatar size={"lg"} />
          <Title c={theme.primaryColor} order={2}>
            MPA Coaching
          </Title>
        </Group>

        <Group>
          <ActionIcon variant="subtle" size={"lg"}>
            <IconBell size={32} withOutline fill="none" />
          </ActionIcon>

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
                    src={user && user.avatar ? user.avatar.url : ""}
                  />
                  <Stack gap={0}>
                    <Text>{user?.email}</Text>
                    <Text>{user?.fullName}</Text>
                  </Stack>
                </Group>
              </Menu.Label>
              <Menu.Divider />
              <Menu.Item
                onClick={() => navigate("/")}
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
            src={user && user.avatar ? user.avatar.url : ""}
            name={getInitials(user?.fullName ?? "")}
          />
        </Group>
      </Group>
    </Card>
  );
}

export default Header;
