import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Timer from "../Timer/Timer";
import {
  QuizResponseType,
  QuizType,
  SubmittedAnswersType,
} from "../../../Models/Pages/QuizModels";
import "../../../Styles/Pages/Questions.css";

type QuestionsPropType = {
  defaultSelectedOption?: string;
  defaultQuestions?: QuizType[];
  defaultLoader?: boolean;
  defaultCurrentIndex?: number;
  defaultSubmittedAnswers?: SubmittedAnswersType;
};

const Questions: React.FC<QuestionsPropType> = ({
  defaultSelectedOption = "",
  defaultQuestions = [],
  defaultLoader = false,
  defaultCurrentIndex = 0,
  defaultSubmittedAnswers = {},
}) => {
  const [questions, setQuestions] = useState<Array<QuizType>>(defaultQuestions);
  const [loader, setLoader] = useState<boolean>(defaultLoader);
  const [currentIndex, setCurrentIndex] = useState<number>(defaultCurrentIndex);
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);
  const [submittedAnswers, setSubmittedAnswers] =
    useState<SubmittedAnswersType>(defaultSubmittedAnswers);
  const [remainingTime, setRemainingTime] = useState<number>(60);
  const [currentScore, setCurrentScore] = useState(0);

  const navigate: NavigateFunction = useNavigate();

  const fetchData = async () => {
    setLoader(true);
    try {
      const response: Response = await fetch(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );
      const questionsResponse: QuizResponseType = await response.json();
      if (questionsResponse?.results?.length > 0)
        setQuestions(questionsResponse?.results);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  let debounceTimer: NodeJS.Timeout;

  const debouncedFetchData = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fetchData();
    }, 2000);
  };

  useEffect(() => {
    if (defaultQuestions.length === 0) debouncedFetchData();
  }, []);

  const handleTimeout = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setRemainingTime(60);
    }
  };

  useEffect(() => {
    setRemainingTime(60);
  }, [currentIndex]);

  const handleOptionChange = (ans: string) => {
    setSelectedOption(ans);
  };

  const handleSubmit = () => {
    setSubmittedAnswers({
      ...submittedAnswers,
      [currentIndex]:
        questions?.[currentIndex]?.correct_answer === selectedOption,
    });
    if (questions?.[currentIndex]?.correct_answer === selectedOption)
      setCurrentScore(currentScore + 1);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setRemainingTime(60);
        setSelectedOption("");
      } else {
        navigate("/result", { state: { submittedAnswers } });
      }
    }, 2000);
  };

  const getClassname = (answer: string) => {
    if (answer) {
      if (
        !Object.keys(submittedAnswers)?.includes(currentIndex.toString()) &&
        answer === selectedOption
      )
        return "answer-selected";
      else if (
        Object.keys(submittedAnswers)?.includes(currentIndex.toString()) &&
        questions[currentIndex]?.correct_answer === answer
      ) {
        return "answer-correct";
      } else if (
        Object.keys(submittedAnswers)?.includes(currentIndex.toString()) &&
        questions[currentIndex]?.correct_answer !== selectedOption &&
        answer === selectedOption
      )
        return "answer-incorrect";
      else return "";
    } else return "";
  };

  return (
    <div className="questions">
      {loader ? (
        <div className="questions-loader"></div>
      ) : (
        questions?.length > 0 && (
          <>
            <div className="questions-timer-container">
              <div className="questions-current-score">{`Score : ${currentScore}`}</div>
              <Timer
                remainingTime={remainingTime}
                onTimeOut={handleTimeout}
                currentIndex={currentIndex}
              />
            </div>
            <div className="questions-container">
              <div className="question-number">{`Question ${
                currentIndex + 1
              } out of ${questions.length}`}</div>
              <div className="question">
                {questions[currentIndex]?.question}
              </div>
              <div className="questions-answers">
                {[
                  ...questions?.[currentIndex]?.incorrect_answers,
                  questions?.[currentIndex]?.correct_answer,
                ]
                  ?.sort()
                  ?.map((answer, index) => (
                    <div
                      className={`answer ${getClassname(answer)}`}
                      key={index}
                      onClick={() => handleOptionChange(answer)}
                    >
                      {answer}
                    </div>
                  ))}
              </div>
              <div className="questions-buttons">
                <button
                  className="questions-prevbutton"
                  disabled={currentIndex <= 0}
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                  Previous
                </button>
                <button
                  className="submit-button"
                  onClick={() => handleSubmit()}
                  disabled={!selectedOption}
                >
                  Submit
                </button>
                {currentIndex === questions.length - 1 ? (
                  <button
                    className="questions-nextbutton"
                    onClick={() =>
                      navigate("/result", { state: { submittedAnswers } })
                    }
                  >
                    See Results
                  </button>
                ) : (
                  <button
                    className="questions-nextbutton"
                    disabled={currentIndex >= questions?.length - 1}
                    onClick={() => {
                      setCurrentIndex(currentIndex + 1);
                      setSelectedOption("");
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Questions;
