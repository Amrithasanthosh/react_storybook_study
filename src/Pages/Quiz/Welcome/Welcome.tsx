import React, { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "../../../Styles/Pages/Welcome.css";

const Welcome: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    document.title = "Welcome";
  }, []);

  return (
    <div className="welcome">
      <div className="lets-play">Lets Play</div>
      <button onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  );
};

export default Welcome;
