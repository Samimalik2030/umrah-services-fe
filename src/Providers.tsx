import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates"; // ✅ import this

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
      <DatesProvider settings={{ locale: "en", firstDayOfWeek: 0 }}>
        <AuthProvider>
          <Version />
          <Notifications position="top-right" withinPortal zIndex={9999} />
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthProvider>
      </DatesProvider>
    </MantineProvider>
  );
};

export default Providers;
