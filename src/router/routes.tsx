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
import LandingPage from "../pages/components/LandingPage";
import { Settings } from "../pages/settings/Settings";
import CityDetails from "../pages/components/CityDetail";
import ElectricianServices from "../pages/components/ElectricianServices";
import ACServices from "../pages/components/ACServices";
import WallPaperServices from "../pages/components/WallPanels";
import RoleGuard from "../guards/RoleGuard";
import { Role } from "../interfaces/ICommonIconProps";
import CityManagers from "../pages/dashboard/CityManagers";
import Services from "../pages/dashboard/Services";
import CitySalesPerson from "../pages/dashboard/CitySalesPersons";
import Professionals from "../pages/dashboard/Professionals";
import ServicesRequests from "../pages/dashboard/ServicesRequests";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/city",
    element: <CityDetails />,
  },
  {
    path: "/electrician-services",
    element: <ElectricianServices />,
  },
  {
    path: "/ac-services",
    element: <ACServices />,
  },
  {
    path: "/wallpanel-services",
    element: <WallPaperServices />,
  },
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

          {
            path: "city-managers",
            element: (
              <RoleGuard allowedRoles={[Role.ADMIN]}>
                <CityManagers />
              </RoleGuard>
            ),
          },
          {
            path: "services",
            element: (
              <RoleGuard allowedRoles={[Role.ADMIN, Role.CITY_MANAGER]}>
                <Services />
              </RoleGuard>
            ),
          },
          {
            path: "service-requests",
            element: (
              <RoleGuard allowedRoles={[Role.CITY_MANAGER]}>
                <ServicesRequests />
              </RoleGuard>
            ),
          },
          // {
          //   path: "salesmans",
          //   element: <SalesMan />,
          // },
          {
            path: "city-salemans",
            element: <CitySalesPerson />,
          },
          {
            path: "professionals",
            element: <Professionals />,
          },
        ],
      },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);

export default routes;
