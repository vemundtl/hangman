import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@mui/material";
import WordToGuess from "./components/WordToGuess/WordToGuess";
import WrongLetters from "./components/WrongLetters/WrongLetters";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>("CAMBODIA");
  const [correctLetters, setCorrectLetters] = useState<Array<string>>([]);
  const [wrongLetters, setWrongLetters] = useState<Array<string>>([]);

  const letters = /^[A-Za-z]$/i;

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (letters.test(event.key)) {
      const keyEventUpperCase = event.key.toUpperCase();
      if (
        !correctLetters.includes(keyEventUpperCase) &&
        wordToGuess.includes(keyEventUpperCase)
      ) {
        setCorrectLetters((correctLetters) => [
          ...correctLetters,
          keyEventUpperCase,
        ]);
      } else if (
        !wrongLetters.includes(keyEventUpperCase) &&
        !wordToGuess.includes(keyEventUpperCase)
      ) {
        setWrongLetters((wrongLetters) => [...wrongLetters, keyEventUpperCase]);
      }
    }
  };

  return (
    <div className="App" tabIndex={0} onKeyDown={keyDownHandler}>
      <header className="App-header">
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <h2>Bilder</h2>
          </Grid>
          <Grid item xs={6} md={4}>
            <WrongLetters wrongLetters={wrongLetters} />
          </Grid>
          <Grid item xs={12} md={12}>
            <WordToGuess
              wordToGuess={wordToGuess}
              correctLetters={correctLetters}
            />
          </Grid>
        </Grid>
      </header>
    </div>
  );
}
export default App;
