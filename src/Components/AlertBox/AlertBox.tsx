import React from "react";
import { AlertBoxPropType } from "../../Models/Components/AlertBoxModel";
import "bootstrap/dist/css/bootstrap.min.css";

const AlertBox: React.FC<AlertBoxPropType> = ({
  children = <div>Primary Alert</div>,
  type = "primary",
}) => {
  return (
    <div>
      <div className={`alert alert-${type}`} role="alert">
        {children}
      </div>
    </div>
  );
};

export default AlertBox;
