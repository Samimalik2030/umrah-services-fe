import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RoleGuard = ({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles: string[];
}) => {
  const { user } = useAuth();

  if (!user?.role) return <Navigate to="/login" />;

  return allowedRoles.includes(user.role) ? (
    <>{children}</>
  ) : (
    <Navigate to="/" />
  );
};

export default RoleGuard;
