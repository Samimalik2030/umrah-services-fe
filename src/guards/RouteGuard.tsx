import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RouteGuard = () => {
  const { accessToken, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/auth/sign-in");
      return;
    }
    if (accessToken && !user?.roles?.includes("Platform Owner")) {
      logout();
    }
  }, [accessToken]);

  return <Outlet />;
};

export default RouteGuard;
