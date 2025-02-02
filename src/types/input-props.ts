import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  icon?: ReactNode | string;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
  errors?: string | undefined;
}