import { ReactNode } from "react";

export interface ITagProps {
  children: ReactNode;
  size?: "s" | "m";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}
