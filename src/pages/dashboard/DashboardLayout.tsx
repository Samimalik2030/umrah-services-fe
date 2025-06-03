import { AppShell, Burger, Group, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../../components/Header";
import { Navigate, Outlet } from "react-router-dom";
import Sidenav from "../../components/Sidenav";
import { useAuth } from "../../contexts/AuthContext";
function DashboardLayout() {
   const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure();



 
  return (
    <AppShell
      header={{ height: 90 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header >
        <Group justify="space-between" align="center" >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" bg={"#fffff"} >
        <Sidenav />
      </AppShell.Navbar>

      <AppShell.Main bg={"#F4F4F7"}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default DashboardLayout;
