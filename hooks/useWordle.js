import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  // each guess is an array (this is for formatted guesses)
  const [guesses, setGuesses] = useState([]);
  // each guess is a string (to check for duplicate guesses)
  const [guessHistory, setGuessHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // ex. [{ key: "a", color: "yellow" }]
  const formatGuess = () => {};

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to turn state
  const addNewGuess = () => {};

  // handle keyup event to track current guess
  // if user presses enter, add the new guess
  const handleKeyUp = () => {};

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
