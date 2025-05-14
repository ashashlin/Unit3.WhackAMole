import { useGame } from "../../context/GameContext";

export default function Scoreboard() {
  const { score, restartGame } = useGame();

  return (
    <div className="scoreboard">
      <span className="scoreboard-item">Score: {score}</span>
      <button
        className="scoreboard-item btn restart-game"
        onClick={restartGame}
      >
        Restart
      </button>
    </div>
  );
}
