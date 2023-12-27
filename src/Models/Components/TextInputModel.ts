import { ChangeEvent } from "react";

export type TextInputPropTypes = {
  type: "text" | "number" | "email" | "password";
  value?: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  name?: string;
};
