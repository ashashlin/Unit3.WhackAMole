import Scoreboard from "./Scoreboard";
import Field from "./Field";
import "./game.css";

export default function Game() {
  return (
    <section className="game">
      <h1>Whack a Mole</h1>
      <Scoreboard />
      <Field />
    </section>
  );
}
