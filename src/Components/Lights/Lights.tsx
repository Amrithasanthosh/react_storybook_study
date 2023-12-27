import React from "react";
import { LightsPropType } from "../../Models/Components/LightsModel";

const Lights: React.FC<LightsPropType> = ({ variant = "green" }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: variant,
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default Lights;
