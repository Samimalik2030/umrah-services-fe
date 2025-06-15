import { NavLink, useMantineTheme } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";


interface Links {
  label: string;
  path: string;
  icon: string;
}

// const adminLinks: Links[] = [
//   {
//     label: "Dashboard",
//     icon: "IconLayoutDashboard",
//     path: "/dashboard",
//   },
//   {
//     label: "City Managers",
//     icon: "IconUsersGroup",
//     path: "/dashboard/city-managers",
//   },
//   {
//     label: "Professionals",
//     icon: "IconUsersGroup",
//     path: "/dashboard/professionals",
//   },
//   {
//     label: "Settings",
//     icon: "IconSettings",
//     path: "/dashboard/settings",
//   },
// ];


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
        <></>
      ),
     
     
    };

    return <>{icons[name] || null}</>;
  }

  let renderedLinks: Links[] = [];

  // if (user?.role === Role.CITY_MANAGER) {
  //   renderedLinks = managerLinks;
  // } else if (user?.role === Role.SALESMAN) {
  //   renderedLinks = SalesPersonLinks;
  // } else {
  //   renderedLinks = adminLinks;
  // }

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
