import { createBrowserRouter } from "react-router-dom";

import PageNotFound from "../pages/PageNotFound";
import SignIn from "../pages/auth/SignIn";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifyOtp from "../pages/auth/VerifyOtp";

import TwoFactorAuth from "../pages/auth/TwoFactorAuth";
import RouteGuard from "../guards/RouteGuard";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/auth",
    children: [
      {
        path: "sign-in",
        element: <SignIn />
      },

      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "reset-password",
        element: <ResetPassword />
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />
      },
      {
        path: "two-factor-auth",
        element: <TwoFactorAuth />
      }
    ]
  },
  {
    path: "/",
    element: <RouteGuard />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            element: <Dashboard />
          }
        ]
      }
    ]
  },
  { path: "*", element: <PageNotFound /> }
]);

export default routes;
