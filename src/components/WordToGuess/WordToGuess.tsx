import React, { useEffect, useState } from "react";
import { getRandomCountry } from "../../helpers/GetRandomCountry";
import "../WordToGuess/WordToGuess.css";

interface WordToGuessProps {
  correctLetters: Array<string>;
  wordToGuess: string;
}

const WordToGuess = ({ wordToGuess, correctLetters }: WordToGuessProps) => {
  return (
    <div>
      {wordToGuess.split("").map((letter, i) => {
        return (
          <span className="wordToGuess__letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default WordToGuess;
