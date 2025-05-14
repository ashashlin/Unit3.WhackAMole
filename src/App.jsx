import Home from "./components/home/Home";
import Game from "./components/game/Game";
import { useGame } from "./context/GameContext";

export default function App() {
  const { isPlaying } = useGame();

  return <>{!isPlaying ? <Home /> : <Game />}</>;
}
