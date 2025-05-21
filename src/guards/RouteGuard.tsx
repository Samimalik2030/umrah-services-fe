import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RouteGuard = () => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/auth/sign-in");
      return;
    }
  }, [accessToken]);

  if (!accessToken) {
    return null;
  }

  return <Outlet />;
};

export default RouteGuard;
