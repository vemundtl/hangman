export const isGameWon = (
  wordToGuess: string,
  correctLetters: Array<String>
) => {
  const wordToGuessArray = wordToGuess.replace(/\s/g, "").split("");
  let result: boolean = true;
  wordToGuessArray.forEach((letter) => {
    if (!correctLetters.includes(letter)) {
      result = false;
    }
  });
  return result;
};
