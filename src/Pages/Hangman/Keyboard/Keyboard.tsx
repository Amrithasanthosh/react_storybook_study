import React from "react";
import { KeyboardPropsType } from "../../../Models/Pages/KeyboardModels";
import { KEYS } from "../../../Constants/KeyboardConstants";
import "../../../Styles/Pages/Keyboard.css";

const Keyboard: React.FC<KeyboardPropsType> = ({
  disabled,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}) => {
  return (
    <div className="keyboard">
      <div className="keyboard-container">
        {KEYS.map((key, index) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);

          return (
            <button
              className="button-container"
              key={index}
              onClick={() => addGuessedLetter(key)}
              disabled={isInactive || isActive || disabled}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
