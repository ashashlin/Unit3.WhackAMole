import { useGame } from "../../context/GameContext";

export default function HighScores() {
  const { highScores } = useGame();
  const scores = highScores.map((score, i) => <span key={i}>{score}</span>);

  return (
    <section className="high-scores">
      <h2>High Scores</h2>

      <section className="scores">
        {highScores.length === 0 ? <p>None yet... Play the game!</p> : scores}
      </section>
    </section>
  );
}
