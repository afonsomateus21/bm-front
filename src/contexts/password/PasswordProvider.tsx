import { useState } from "react";
import { PasswordProviderProps } from "../../types/password-provider-props";
import { PasswordContext } from "./PasswordContext";

export const PasswordProvider = ({ children }: PasswordProviderProps) => {
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