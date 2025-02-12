import { useEffect } from "react";
import { useAuth } from "../hooks";

export function CustomerHome() {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <h1>Home</h1>
  );
}