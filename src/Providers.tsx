import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";

import theme from "./theme";
import { AuthProvider } from "./contexts/AuthContext";
import Version from "./components/Version";

const Providers = () => {
  return (
    <MantineProvider theme={theme}>
      <Version />
      <Notifications position="top-right" withinPortal zIndex={9999} />
      <AuthProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </MantineProvider>
  );
};

export default Providers;
