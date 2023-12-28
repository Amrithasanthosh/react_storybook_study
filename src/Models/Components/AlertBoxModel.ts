import React from "react";

export type AlertBoxPropType = {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  children?: React.ReactNode;
  show?: boolean;
  toggleShow?: (value: boolean) => void;
};
