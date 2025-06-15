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
import AuthLayout from "../pages/auth/AuthLayout";
import SignUp from "../pages/auth/SignUp";

import { Settings } from "../pages/settings/Settings";

import RoleGuard from "../guards/RoleGuard";
import { Role } from "../interfaces/ICommonIconProps";
import LandingPage from "../pages/components/LandingPage";

const routes = createBrowserRouter([
  { path: "/", element: <LandingPage /> },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />,
      },
      {
        path: "two-factor-auth",
        element: <TwoFactorAuth />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <RouteGuard />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: (
              <RoleGuard allowedRoles={[Role.ADMIN]}>
                <Dashboard />
              </RoleGuard>
            ),
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);

export default routes;
