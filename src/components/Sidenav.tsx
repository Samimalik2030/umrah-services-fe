import { NavLink, useMantineTheme } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import IconLayoutDashboard from "../assets/icons/IconDotsUnion";
import IconWorld from "../assets/icons/IconWorld";
import IconChartHistogram from "../assets/icons/IconChartHistogram";
import IconMessageChatbot from "../assets/icons/IconMessageChatbot";
import IconTopologyStar from "../assets/icons/IconTopologyStar";
import IconUsersGroup from "../assets/icons/IconUsersGroup";
import IconReceiptDollar from "../assets/icons/IconReceiptDollar";
import IconSettings from "../assets/icons/IconSettings";
import { useAuth } from "../contexts/AuthContext";
import { Role } from "../interfaces/ICommonIconProps";

interface Links {
  label: string;
  path: string;
  icon: string;
}

const adminLinks: Links[] = [
  {
    label: "Jobs",
    icon: "IconLayoutDashboard",
    path: "/dashboard",
  },
  {
    label: "District Officers",
    icon: "IconLayoutDashboard",
    path: "/dashboard/district-officers",
  },
  {
    label: "Recruiters",
    icon: "IconWorld",
    path: "/dashboard/recruiters",
  },
  {
    label: "Candidates",
    icon: "IconUsersGroup",
    path: "/dashboard/candidates",
  },
  {
    label: "Settings",
    icon: "IconSettings",
    path: "/dashboard/settings",
  },
];

const officerLinks: Links[] = [
  {
    label: "Recruiters",
    icon: "IconWorld",
    path: "/dashboard/my-recruiters",
  },
  {
    label: "Candidates",
    icon: "IconUsersGroup",
    path: "/dashboard/candidates",
  },
  {
    label: "Settings",
    icon: "IconSettings",
    path: "/dashboard/settings",
  },
];

const recruiterLinks: Links[] = [
  {
    label: "Candidates",
    icon: "IconWorld",
    path: "/dashboard/district-candidates",
  },
  {
    label: "Settings",
    icon: "IconSettings",
    path: "/dashboard/settings",
  },
];

function Sidenav() {
  const { pathname } = useLocation();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { user } = useAuth();

  function Icon({
    name,
    isActive,
    size,
  }: {
    name: string;
    isActive: boolean;
    size: number;
  }) {
    const color = isActive ? theme.colors.blue[4] : theme.colors.gray[5];
    const icons: Record<string, React.ReactNode> = {
      IconLayoutDashboard: (
        <IconLayoutDashboard fill="none" withOutline color={color} size={size} />
      ),
      IconWorld: (
        <IconWorld fill="none" withOutline color={color} size={size} />
      ),
      IconUsersGroup: (
        <IconUsersGroup fill="none" withOutline color={color} size={size} />
      ),
      IconTopologyStar: (
        <IconTopologyStar fill="none" withOutline color={color} size={size} />
      ),
      IconReceiptDollar: (
        <IconReceiptDollar fill="none" withOutline color={color} size={size} />
      ),
      IconChartHistogram: (
        <IconChartHistogram fill="none" withOutline color={color} size={size} />
      ),
      IconMessageChatbot: (
        <IconMessageChatbot fill="none" withOutline color={color} size={size} />
      ),
      IconSettings: (
        <IconSettings fill="none" withOutline color={color} size={size} />
      ),
    };

    return <>{icons[name] || null}</>;
  }

  let renderedLinks: Links[] = [];

  if (user?.role === Role.DISTRICT_OFFICER) {
    renderedLinks = officerLinks;
  } else if (user?.role === Role.RECRUITER) {
    renderedLinks = recruiterLinks;
  } else {
    renderedLinks = adminLinks;
  }

  return (
    <div>
      {renderedLinks.map((link, index) => (
        <NavLink
          key={index}
          label={link.label}
          leftSection={
            link.icon ? (
              <Icon
                name={link.icon}
                isActive={pathname === link.path}
                size={18}
              />
            ) : null
          }
          active={pathname === link.path}
          onClick={() => navigate(link.path)}
          color="blue"
        />
      ))}
    </div>
  );
}

export default Sidenav;
