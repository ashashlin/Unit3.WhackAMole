import { useGame } from "../../context/GameContext";

export default function Scoreboard() {
  const { score, restartGame, time } = useGame();

  return (
    <div className="scoreboard">
      <span className="scoreboard-item">Score: {score}</span>
      <span className="scoreboard-item">Time: {time}</span>
      <button
        className="scoreboard-item btn restart-game"
        onClick={restartGame}
      >
        Restart
      </button>
    </div>
  );
}
