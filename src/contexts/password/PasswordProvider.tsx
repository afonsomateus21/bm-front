import { useState } from "react";
import { CustomProviderProps } from "../../types";
import { PasswordContext } from "./PasswordContext";

export const PasswordProvider = ({ children }: CustomProviderProps) => {
  const [ showPassword, setShowPassword ] = useState(false);

  function handleShowPassword() {
    setShowPassword(prevState => !prevState);
  }

  return (
    <PasswordContext.Provider value={{ showPassword, handleShowPassword }}>
      { children }
    </PasswordContext.Provider>
  )
}