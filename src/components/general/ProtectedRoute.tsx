import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks";

export function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet/>;
}