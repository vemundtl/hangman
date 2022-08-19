import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Grid } from "@mui/material";
import WordToGuess from "./components/WordToGuess/WordToGuess";
import WrongLetters from "./components/WrongLetters/WrongLetters";
import { getPicture } from "./utils/GetPicture";
import Alert, { AlertColor } from "@mui/material/Alert";
import defaultPic from "./images/hangman-step-4.png";
import { isGameWon } from "./utils/isGameWon";
import ReplayRounded from "@mui/icons-material/ReplayRounded";
import { getRandomCountry } from "./helpers/GetRandomCountry";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>("");
  const [correctLetters, setCorrectLetters] = useState<Array<string>>([]);
  const [wrongLetters, setWrongLetters] = useState<Array<string>>([]);
  const [picture, setPicture] = useState<string>(defaultPic);
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [hasLost, setHasLost] = useState<boolean>(false);
  const [gameMessage, setGameMessage] = useState<string>("");
  const [gameMessageSeverity, setGameMessageSeverity] =
    useState<AlertColor>("success");

  const letters = /^[A-Za-z]$/i;

  const handleRestart = () => {
    setGameMessage("");
    setHasLost(false);
    setHasWon(false);
    setCorrectLetters([]);
    setWrongLetters([]);
    setPicture(defaultPic);
    getData();
  };

  const checkGameStatus = () => {
    if (wrongLetters.length >= 6) {
      setHasLost(true);
    } else if (isGameWon(wordToGuess, correctLetters)) {
      setHasWon(true);
    }
  };

  const getData = async () => {
    const randomCountry = await getRandomCountry();
    setWordToGuess(
      randomCountry
        .toUpperCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
    );
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (letters.test(event.key) && !hasLost && !hasWon) {
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

  useEffect(() => {
    console.log(wordToGuess);
    if (wordToGuess === "") {
      getData();
    } else {
      checkGameStatus();
      if (!hasWon && !hasLost) {
        setPicture(getPicture(wrongLetters.length));
      } else if (hasLost) {
        setGameMessageSeverity("warning");
        setGameMessage(`You lost... The correct answer was ${wordToGuess}`);
      } else if (hasWon) {
        setGameMessageSeverity("success");
        setGameMessage(`You made it! The correct answer was ${wordToGuess}`);
      }
    }
  }, [correctLetters, wrongLetters, hasLost, hasWon]);

  return (
    <div className="App" tabIndex={0} onKeyDown={keyDownHandler}>
      <header className="App-header">
        <h2>HANGMAN for countries, islands and territories</h2>
        {(hasWon || hasLost) && (
          <Alert sx={{ marginBottom: "30px" }} severity={gameMessageSeverity}>
            {gameMessage}
          </Alert>
        )}
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <img src={picture} height="300px" width="300px" />
          </Grid>
          <Grid item xs={6} md={4}>
            <WrongLetters wrongLetters={wrongLetters} />
          </Grid>
          <Grid sx={{ marginBottom: "40px" }} item xs={12} md={12}>
            <WordToGuess
              wordToGuess={wordToGuess}
              correctLetters={correctLetters}
            />
          </Grid>
        </Grid>
        <div className="restartButton-container">
          <Button
            className="restartButton-container__button"
            onClick={handleRestart}
            variant="contained"
            startIcon={<ReplayRounded />}
          >
            Restart
          </Button>
        </div>
        <Alert severity="info">
          All special characters are removed so you would have to use the
          regular ones{" "}
        </Alert>
      </header>
    </div>
  );
}
export default App;
