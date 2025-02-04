import { createContext } from "react";
import { PasswordContextData } from "../../types";

export const PasswordContext = createContext<PasswordContextData>(
  {} as PasswordContextData
);
