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
import Companies from "../pages/companies/Companies";
import Students from "../pages/students/Students";
import Analytics from "../pages/analytics/Analytics";
import Hosts from "../pages/hosts/Hosts";
import Projects from "../pages/projects/Projects";
import Settings from "../pages/settings/Settings";
import Subscriptions from "../pages/subscriptions/Subscriptions";
import Support from "../pages/support/Support";
import CompanyDetail from "../pages/companies/CompanyDetail";
import Properties from "../pages/hosts/properties/Properties";

const routes = createBrowserRouter([
  {
    path: "/auth",
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
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
    path: "/",
    element: <RouteGuard />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },

          { path: "/companies", element: <Companies /> },
          { path: "/companies/:id/jobs", element: <CompanyDetail /> },
          { path: "/students", element: <Students /> },
          { path: "/host", element: <Hosts /> },
          { path: "/host/:id/properties", element: <Properties /> },

          { path: "/subscriptions", element: <Subscriptions /> },
          { path: "/analytics", element: <Analytics /> },
          { path: "/support", element: <Support /> },
          { path: "/projects", element: <Projects /> },
          { path: "/settings", element: <Settings /> },
        ],
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default routes;
