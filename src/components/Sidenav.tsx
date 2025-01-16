import { NavLink, useMantineTheme } from "@mantine/core";
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
function Sidenav() {
  const { pathname } = useLocation();
  const theme = useMantineTheme();

  function Icon({
    name,
    isActive,
    size,
  }: {
    name: string;
    isActive: boolean;
    size: number;
  }) {
    const newColor = isActive ? theme.colors.blue[4] : theme.colors.gray[5];
    const icons: Record<string, React.ReactNode> = {
      IconLayoutDashboard: (
        <IconLayoutDashboard
          fill="none"
          withOutline
          color={newColor}
          size={size}
        />
      ),
      IconWorld: (
        <IconWorld fill="none" withOutline color={newColor} size={size} />
      ),
      IconUsersGroup: (
        <IconUsersGroup fill="none" withOutline color={newColor} size={size} />
      ),
      IconTopologyStar: (
        <IconTopologyStar
          fill="none"
          withOutline
          color={newColor}
          size={size}
        />
      ),
      IconReceiptDollar: (
        <IconReceiptDollar
          fill="none"
          withOutline
          color={newColor}
          size={size}
        />
      ),
      IconChartHistogram: (
        <IconChartHistogram
          fill="none"
          withOutline
          color={newColor}
          size={size}
        />
      ),
      IconMessageChatbot: (
        <IconMessageChatbot
          fill="none"
          withOutline
          color={newColor}
          size={size}
        />
      ),
      IconBrandDatabricks: (
        <IconBrandDatabricks
          fill="none"
          withOutline
          color={newColor}
          size={size}
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
                <Icon name={l.icon} isActive={pathname === l.path} size={18} />
              ) : null
            }
            active={pathname === l.path}
            href={l.path}
            color="blue"
          />
        );
      })}
    </div>
  );
}

export default Sidenav;
