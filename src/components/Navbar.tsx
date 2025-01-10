import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Card,
  Group,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import IconLogout from "../assets/icons/IconLogout";
import { useAuth } from "../contexts/AuthContext";

const navLinks = [{ label: "Dashboard", route: "/" }];

function Navbar() {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  console.log(pathName);
  const { logout, user } = useAuth();

  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Card
      w={"100%"}
      withBorder={false}
      shadow="xs"
      radius={0}
      pos={"sticky"}
      top={0}
      style={{ zIndex: 1000 }}
    >
      <Group justify="space-between" align="center">
        <Box visibleFrom="md">
          <Title c={theme.primaryColor} order={2}>
            MPA Coaching
          </Title>
        </Box>

        <Box>
          <Group align="center" gap={0}>
            {navLinks.map((item, i) => (
              <Button
                key={i}
                c={pathName === item.route ? theme.primaryColor : "#313131"}
                variant="subtle"
                fw={pathName === item.route ? "700" : "400"}
                size={isSmallScreen ? "sm" : "lg"}
                onClick={() => navigate(item.route)}
              >
                {item.label}
              </Button>
            ))}
          </Group>
        </Box>

        <Box>
          <Group align="center">
            <Group>
              <Avatar
                src={null}
                size={isSmallScreen ? "sm" : "lg"}
                bg={"#606060"}
                color={"#FFFFFF"}
              >
                {user?.firstName.charAt(0).toUpperCase()}
                {user?.lastName.charAt(0).toUpperCase()}
              </Avatar>
              <Stack gap={0}>
                <Text fw={600} truncate="end" lineClamp={1}>
                  {user?.fullName}
                </Text>
                <Text truncate="end" lineClamp={1}>
                  {user?.email}
                </Text>
              </Stack>
            </Group>
            <Stack>
              <ActionIcon variant="subtle" size={40} onClick={() => logout()}>
                <IconLogout size={40} fill="none" />
              </ActionIcon>
            </Stack>
          </Group>
        </Box>
      </Group>
    </Card>
  );
}

export default Navbar;
