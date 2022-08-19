import React, { useEffect, useState } from "react";
import { getRandomCountry } from "../../helpers/GetRandomCountry";
import "../WordToGuess/WordToGuess.css";

interface WordToGuessProps {
  correctLetters: Array<string>;
  wordToGuess: string;
}

const WordToGuess = ({ wordToGuess, correctLetters }: WordToGuessProps) => {
  return (
    <div className="wordToGuess-container">
      {wordToGuess.split("").map((letter, i) => {
        if (letter.charAt(0) === " ") {
          return <span key={i}>-</span>;
        } else {
          return (
            <span className="wordToGuess__letter" key={i}>
              {correctLetters.includes(letter) ? letter : ""}
            </span>
          );
        }
      })}
    </div>
  );
};

export default WordToGuess;
