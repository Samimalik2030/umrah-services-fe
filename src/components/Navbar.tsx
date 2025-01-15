import { NavLink } from "@mantine/core";
import { useLocation } from "react-router-dom";
import IconLayoutDashboard from "../assets/icons/IconDotsUnion";
import IconWorld from "../assets/icons/IconWorld";
import IconBrandDatabricks from "../assets/icons/IconBrandDatabricks";
import IconChartHistogram from "../assets/icons/IconChartHistogram";
import IconMessageChatbot from "../assets/icons/IconMessageChatbot";
import IconTopologyStar from "../assets/icons/IconTopologyStar";
import IconUsersGroup from "../assets/icons/IconUsersGroup";
import IconReceiptDollar from "../assets/icons/IconReceiptDollar";

interface Links {
  label: string;
  path: string;
  icon: string;
}
function Navbar() {
  const { pathname } = useLocation();

  function Icon({ name, isActive }: { name: string; isActive: boolean }) {
    const icons: Record<string, React.ReactNode> = {
      IconLayoutDashboard: (
        <IconLayoutDashboard
          fill="none"
          withOutline
          color={isActive ? "white" : "#909090"}
        />
      ),
      IconWorld: (
        <IconWorld
          fill="none"
          withOutline
          color={isActive ? "white" : "#909090"}
        />
      ),
      IconUsersGroup: (
        <IconUsersGroup
          fill="none"
          withOutline
          color={isActive ? "white" : "#909090"}
        />
      ),
      IconTopologyStar: (
        <IconTopologyStar
          fill="none"
          withOutline
          color={isActive ? "white" : "#909090"}
        />
      ),
      IconReceiptDollar: (
        <IconReceiptDollar
          fill="none"
          withOutline
          color={isActive ? "white" : "#909090"}
        />
      ),
      IconChartHistogram: (
        <IconChartHistogram
          fill="none"
          withOutline
          color={isActive ? "white" : "#909090"}
        />
      ),
      IconMessageChatbot: (
        <IconMessageChatbot
          fill="none"
          withOutline
          color={isActive ? "white" : "#909090"}
        />
      ),
      IconBrandDatabricks: (
        <IconBrandDatabricks
          fill="none"
          withOutline
          color={isActive ? "white" : "#909090"}
        />
      ),
    };

    return <>{icons[name] || null}</>;
  }

  const links: Links[] = [
    {
      label: "Dashboard",
      icon: "IconLayoutDashboard",
      path: "/",
    },
    {
      label: "Businesses",
      icon: "IconWorld",
      path: "/business",
    },
    { label: "Students", icon: "IconUsersGroup", path: "/students" },
    { label: "Hosts", icon: "IconTopologyStar", path: "/host" },
    {
      label: "Subscriptions",
      icon: "IconReceiptDollar",
      path: "/subscriptions",
    },
    { label: "Analytics", icon: "IconChartHistogram", path: "/analytics" },
    { label: "Support", icon: "IconMessageChatbot", path: "/support" },
    { label: "Projects", icon: "IconBrandDatabricks", path: "/projects" },
  ];

  return (
    <div>
      {links.map((l, i) => {
        return (
          <NavLink
            key={i}
            label={l.label}
            leftSection={
              l.icon ? (
                <Icon name={l.icon} isActive={pathname === l.path} />
              ) : null
            }
            variant="filled"
            active={pathname === l.path}
            href={l.path}
          />
        );
      })}
    </div>
  );
}

export default Navbar;
