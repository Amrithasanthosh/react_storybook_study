import React, { useState, useEffect } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { TimerPropType } from "../../../Models/Pages/QuizModels";
import "../../../Styles/Pages/Timer.css";

const Timer: React.FC<TimerPropType> = ({
  remainingTime,
  onTimeOut,
  currentIndex,
}) => {
  const [seconds, setSeconds] = useState(remainingTime);

  useEffect(() => {
    setSeconds(remainingTime);
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime, currentIndex]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOut();
    }
  }, [seconds]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `0${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="timer">
      <IoTimerOutline size={25} />
      {formatTime(seconds)}
    </div>
  );
};

export default Timer;
