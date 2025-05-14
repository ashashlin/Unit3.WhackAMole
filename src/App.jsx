import Home from "./components/home/Home";
import Game from "./components/game/Game";

export default function App() {
  const isPlaying = false;

  return <>{!isPlaying ? <Home /> : <Game />}</>;
}
