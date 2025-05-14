import { useGame } from "../../context/GameContext";

export default function Field() {
  const { field, randomIndex } = useGame();
  const holes = field.map((obj, i) => (
    <div
      key={obj.id}
      className={`hole ${i === randomIndex ? "mole" : ""}`}
    ></div>
  ));

  return <section className="game-field">{holes}</section>;
}
