import React, { useState } from "react";
import { CounterPropType } from "../../Models/Pages/CounterModel";
import "../../Styles/Pages/Counter.css";

const Counter: React.FC<CounterPropType> = ({
  defaultCount = 0,
  incrementValue = 1,
}) => {
  const [count, setCount] = useState(defaultCount);

  const handleChange = (entityType: "increment" | "decrement") => {
    entityType === "increment"
      ? setCount((prevCount) => prevCount + incrementValue)
      : setCount((prevCount) => prevCount - incrementValue);
  };

  return (
    <div className="counter">
      <button
        type="button"
        onClick={() => handleChange("decrement")}
        disabled={count <= defaultCount}
      >
        -
      </button>
      <div data-testid="count">{count}</div>
      <button type="button" onClick={() => handleChange("increment")}>
        +
      </button>
    </div>
  );
};

export default Counter;
