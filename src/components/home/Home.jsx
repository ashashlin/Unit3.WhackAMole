import Welcome from "./Welcome";
import HighScores from "./HighScores";
import "./home.css";

export default function Home() {
  return (
    <section className="home">
      <h1>Whack a Mole</h1>
      <Welcome />
      <HighScores />
    </section>
  );
}
