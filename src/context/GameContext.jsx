import { createContext, useContext, useState } from "react";

const numOfHoles = 9;

const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function startGame() {
    setIsPlaying(true);
  }

  const field = Array.from({ length: numOfHoles }, (_, i) => ({
    id: i + 1,
    active: false,
  }));
  const randomIndex = Math.floor(Math.random() * numOfHoles);

  const value = { isPlaying, startGame, field, randomIndex };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);

  if (!value) throw Error("useGame must be used within a GameContextProvider");

  return value;
}
