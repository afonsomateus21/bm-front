import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks";
import { Spinner } from "./Spinner";

export function LoginRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />
  }

  if (user) return <Navigate to="/home" replace />;

  return <Outlet />;
}