import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IErrorResponse } from "./interfaces/IErrorResponse.ts";
import { notifications } from "@mantine/notifications";


const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: IErrorResponse) => {
        const message = error.response?.data?.message;
        if (message) {
          notifications.show({
            color: "red",
            message,
          });
        }
      },
      onSuccess: (data: any) => {
        const message = data?.data?.message;
        if (message) {
          notifications.show({
            color: "green",
            message,
          });
        }
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
