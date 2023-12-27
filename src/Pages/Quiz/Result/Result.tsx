import React from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { ResultPropType } from "../../../Models/Pages/QuizModels";
import "../../../Styles/Pages/Result.css";

const Result: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const location: { state: ResultPropType } = useLocation();
  const { submittedAnswers } = location.state || { submittedAnswers: {} };

  const getCorrectAnsCount = () => {
    let correctedAns = 0;

    for (const key of Object.keys(submittedAnswers)) {
      if (submittedAnswers[+key]) correctedAns++;
    }

    return correctedAns;
  };

  return (
    <div className="result">
      <div className="congrats">Congratulations</div>
      <div className="result-container">{`${getCorrectAnsCount()}/10`}</div>
      <div className="box-container">
        <div className="box attended">
          <div>Attended</div>
          <div>{Object.keys(submittedAnswers)?.length}</div>
        </div>
        <div className="box unattended">
          <div>Unattended</div>
          <div>{10 - Object.keys(submittedAnswers)?.length}</div>
        </div>
      </div>
      <button type="button" onClick={() => navigate("/quiz")}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
