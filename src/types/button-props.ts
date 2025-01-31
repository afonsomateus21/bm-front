import { AriaAttributes, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps 
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, AriaAttributes  {}