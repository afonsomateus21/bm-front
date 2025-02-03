import { createContext } from "react";
import { PasswordContextData } from "../../types/password-context-data";

export const PasswordContext = createContext<PasswordContextData>(
  {} as PasswordContextData
);
