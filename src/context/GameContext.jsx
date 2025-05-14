import { createContext, useContext, useState } from "react";

const numOfHoles = 9;
let lastRandomIndex;

const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState([]);

  function startGame() {
    setIsPlaying(true);
  }

  function restartGame() {
    saveTheScore();
    setScore(0);
    setIsPlaying(false);
  }

  function increaseScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function saveTheScore() {
    setHighScores((prevHighScores) => [...prevHighScores, score]);
  }

  const field = Array.from({ length: numOfHoles }, (_, i) => ({
    id: i + 1,
  }));

  // Make sure the random index of the current hole for the mole is different from the last random index
  let randomIndex = Math.floor(Math.random() * numOfHoles);
  while (randomIndex === lastRandomIndex) {
    randomIndex = Math.floor(Math.random() * numOfHoles);
  }
  lastRandomIndex = randomIndex;

  const value = {
    isPlaying,
    startGame,
    restartGame,
    field,
    randomIndex,
    score,
    increaseScore,
    highScores,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);

  if (!value) throw Error("useGame must be used within a GameContextProvider");

  return value;
}
