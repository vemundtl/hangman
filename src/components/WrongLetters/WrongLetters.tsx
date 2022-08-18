import React, { useState } from "react";

interface WrongLettersProps {
  wrongLetters: Array<string>;
}

const WrongLetters = ({ wrongLetters }: WrongLettersProps) => {
  return (
    <div>
      <h2>Wrong letters</h2>
      {wrongLetters &&
        wrongLetters.map((letter, i) => {
          return (
            <span className="" key={i}>
              {letter},
            </span>
          );
        })}
    </div>
  );
};

export default WrongLetters;
