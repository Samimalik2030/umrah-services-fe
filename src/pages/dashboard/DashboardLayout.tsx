import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 90 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group justify="space-between" align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" bg={"#F4F4F7"}>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main bg={"white"}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default DashboardLayout;

// <div>
//   <Navbar />
//   <Outlet />
// </div>
