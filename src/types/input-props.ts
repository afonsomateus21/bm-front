import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  icon?: ReactNode | string;
  errors?: string | undefined;
}