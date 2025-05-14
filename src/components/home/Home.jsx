import "./home.css";

export default function Home() {
  return (
    <section className="home">
      <h1>Whack a Mole</h1>

      <section className="welcome">
        <p>Welcome to Whack a Mole!</p>
        <p>Whack a mole to earn points.</p>
        <p>How many can you get?</p>
      </section>

      <button className="btn play-game">Play</button>

      {/* <section className="high-scores">
        <h2>High Scores</h2>
      </section> */}
    </section>
  );
}
