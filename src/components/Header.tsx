import {
  ActionIcon,
  Avatar,
  Card,
  Divider,
  Group,
  Indicator,
  List,
  LoadingOverlay,
  Menu,
  ScrollArea,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import IconBell from "../assets/icons/IconBell";
import getInitials from "../utils/getInitials";
import IconLogout from "../assets/icons/IconLogout";
import IconSettings from "../assets/icons/IconSettings";
import { useMediaQuery } from "@mantine/hooks";
import useGetNotifications from "../hooks/useGetNotifications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateNotificationDto } from "../http/Api";
import http from "../http";

function Header() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { notifications, gettingNotifications } = useGetNotifications(1);
  const queryClient = useQueryClient();

  const { mutate: patchNotification, isPending: isPatchPending } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateNotificationDto }) =>
      http.notifications.notificationControllerPatch(id, data),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["notifications", 1] });
      window.location.replace(`${res.data.context.url}`);
    }
  });

  const handlePatchStatus = (id: string, data: UpdateNotificationDto) => {
    patchNotification({ id, data });
  };

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
          <Menu
            shadow="md"
            width={isMobile ? "300px" : "30%"}
            offset={13}
            withArrow
          >
            <LoadingOverlay visible={gettingNotifications || isPatchPending} />
            <Menu.Target>
              <Indicator
                color={theme.colors.red[7]}
                size={10}
                disabled={
                  notifications?.data &&
                  notifications?.data.filter(
                    (notification) => notification.status === "Unread"
                  ).length > 0
                    ? false
                    : true
                }
              >
                <ActionIcon variant="subtle" size={"xl"}>
                  <IconBell size={32} withOutline fill="none" />
                </ActionIcon>
              </Indicator>
            </Menu.Target>
            <Menu.Dropdown>
              <ScrollArea h={isMobile ? "200px" : "400px"} scrollbarSize={4}>
                {notifications?.data
                  .filter((notification) => notification.status === "Unread")
                  .map((notification) => (
                    <>
                      <Menu.Item bg={theme.colors.gray[0]}>
                        <List c={theme.colors.blue[7]}>
                          <List.Item
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePatchStatus(notification.id, {
                                status: "Read"
                              });
                            }}
                          >
                            <Text fw={600}>{notification.context.content}</Text>
                          </List.Item>
                        </List>
                      </Menu.Item>
                      <Divider />
                    </>
                  ))}
                {notifications?.data
                  .filter((notification) => notification.status === "Read")
                  .map((notification) => (
                    <>
                      <Menu.Item>
                        <List>
                          <List.Item
                            onClick={(e) => {
                              e.stopPropagation();
                              window.location.replace(
                                `${notification.context.url}`
                              );
                            }}
                          >
                            <Text>{notification.context.content}</Text>
                          </List.Item>
                        </List>
                      </Menu.Item>
                      <Divider />
                    </>
                  ))}
              </ScrollArea>
            </Menu.Dropdown>
          </Menu>

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
                onClick={() => navigate("/settings")}
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
