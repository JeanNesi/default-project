import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  outlined?: boolean;
  loading?: boolean;
  justify?: "flex-start" | "center" | "flex-end";
  borderless?: boolean;
  fullWidth?: boolean;
  color?: string;
  type: "button" | "reset" | "submit";
}