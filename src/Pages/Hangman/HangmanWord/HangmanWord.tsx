import React from "react";
import { HangmanWordPropsType } from "../../../Models/Pages/HangmanWordModel";
import "../../../Styles/Pages/HangmanWord.css";

const HangmanWord: React.FC<HangmanWordPropsType> = ({
  guessedLetters,
  wordToGuess,
  reveal,
}) => {
  return (
    <div className="hangman-word">
      {wordToGuess.split("").map((letter: string, index: number) => (
        <span key={index} className="hangman-word-key">
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
