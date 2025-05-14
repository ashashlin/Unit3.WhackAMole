import { createContext, useContext, useState, useRef, useEffect } from "react";

const numOfHoles = 9;
let lastRandomIndex;

const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [randomIndex, setRandomIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [time, setTime] = useState(15);
  const timerRef = useRef(null);

  const field = Array.from({ length: numOfHoles }, (_, i) => ({
    id: i + 1,
  }));

  useEffect(() => {
    if (time === 0) {
      restartGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  function startGame() {
    generateRandomIndex();
    startTimer();
    setIsPlaying(true);
  }

  function restartGame() {
    saveTheScore();
    setScore(0);
    setIsPlaying(false);
  }

  function generateRandomIndex() {
    setRandomIndex(() => {
      let randomIndex = Math.floor(Math.random() * numOfHoles);
      while (randomIndex === lastRandomIndex) {
        randomIndex = Math.floor(Math.random() * numOfHoles);
      }
      lastRandomIndex = randomIndex;

      return randomIndex;
    });
  }

  function increaseScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function saveTheScore() {
    setHighScores((prevHighScores) => [...prevHighScores, score]);
  }

  function startTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setTime(15);
    }

    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  }

  const value = {
    isPlaying,
    startGame,
    restartGame,
    field,
    randomIndex,
    generateRandomIndex,
    score,
    increaseScore,
    highScores,
    time,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);

  if (!value) throw Error("useGame must be used within a GameContextProvider");

  return value;
}
