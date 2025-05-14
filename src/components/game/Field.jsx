import { useGame } from "../../context/GameContext";

export default function Field() {
  const { field, randomIndex, increaseScore } = useGame();
  const holes = field.map((obj, i) => (
    <div
      key={obj.id}
      className={`hole ${i === randomIndex ? "mole" : ""}`}
      onClick={i === randomIndex ? increaseScore : null}
    ></div>
  ));

  return <section className="game-field">{holes}</section>;
}
