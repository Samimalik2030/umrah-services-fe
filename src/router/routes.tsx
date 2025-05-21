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
import DistrictOfficers from "../pages/dashboard/DistrictOfficers";
import Recruiters from "../pages/dashboard/Recruiters";
import Candidates from "../pages/dashboard/Candidates";
import { Settings } from "../pages/settings/Settings";
import CandidateStepper from "../pages/components/CandiateStepper";
import RecruiterListDistrict from "../officer-pages/RecruiterListDistrict";
import DistrictCandidates from "../pages/dashboard/DistrictCandidates";
import Jobs from "../pages/components/Jobs";
import MyJobs from "../pages/components/MyJobs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
            element: <Dashboard />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "district-officers",
            element: <DistrictOfficers />,
          },
          {
            path: "recruiters",
            element: <Recruiters />,
          },
          {
            path: "my-recruiters",
            element: <RecruiterListDistrict />,
          },
          {
            path: "candidates",
            element: <Candidates />,
          },
          {
            path: "district-candidates",
            element: <DistrictCandidates />,
          },
        ],
      },
    ],
  },
  {
    path: "/stepper",
    element: <CandidateStepper />,
  },
  {
    path: "/my-jobs",
    element: <MyJobs />,
  },
  {
    path: "jobs",
    element: <Jobs />,
  },
  { path: "*", element: <PageNotFound /> },
]);

export default routes;
