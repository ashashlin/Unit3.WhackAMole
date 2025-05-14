import { useGame } from "../../context/GameContext";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <section className="welcome">
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button className="btn play-game" onClick={startGame}>
        Play
      </button>
    </section>
  );
}
