import { useContext } from "react";
import { PasswordContext } from "../contexts";

export function useShowPassword() {
  const context = useContext(PasswordContext)

  return context;
}