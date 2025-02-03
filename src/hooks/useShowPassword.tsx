import { useContext } from "react";
import { PasswordContext } from "../contexts/password/PasswordContext";

export function useShowPassword() {
  const context = useContext(PasswordContext)

  return context;
}