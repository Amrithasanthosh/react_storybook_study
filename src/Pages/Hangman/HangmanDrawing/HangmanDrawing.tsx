import React from "react";
import { HangmanDrawingPropsType } from "../../../Models/Pages/HangmanDrawingModel";
import "../../../Styles/Pages/HangmanDrawing.css";

const HangmanDrawing: React.FC<HangmanDrawingPropsType> = ({
  numberOfGuesses,
}) => {
  const HEAD = <div className="hangman-head"></div>;

  const BODY = <div className="hangman-body"></div>;

  const RIGHT_ARM = <div className="hangman-rightarm"></div>;

  const LEFT_ARM = <div className="hangman-leftarm"></div>;

  const RIGHT_LEG = <div className="hangman-rightleg"></div>;

  const LEFT_LEG = <div className="hangman-leftleg"></div>;

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    <div className="hangman-container">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "300px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
