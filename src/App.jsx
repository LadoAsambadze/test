import { useState } from "react";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("./dice-1.png"); // სთეითია ფოტოსთვის, საწყისი მნიშვნელობა წერია ფრჩხილებში.
  const [current, setCurrent] = useState(0); // მიმდინარე ქულა
  const [player, setPlayer] = useState(true); // სთეითი მოთამაშის რიგისთვის
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  function Roll() {
    const x = Math.floor(Math.random() * 6) + 1; // რენდომ რიცხვს 1 დან 6 მდე

    if (x === 1) {
      setCurrent(0);
      setPlayer(!player);
    } else {
      setCurrent(current + x);
    }

    if (x === 1) {
      setImageUrl("./dice-1.png");
    } else if (x === 2) {
      setImageUrl("./dice-2.png");
    } else if (x === 3) {
      setImageUrl("./dice-3.png");
    } else if (x === 4) {
      setImageUrl("./dice-4.png");
    } else if (x === 5) {
      setImageUrl("./dice-5.png");
    } else if (x === 6) {
      setImageUrl("./dice-6.png");
    }
  }

  function Hold() {
    setPlayer(!player);
    setCurrent(0);

    let newPlayerOne = playerOne;
    let newPlayerTwo = playerTwo;

    if (player) {
      newPlayerOne = playerOne + current;
      setPlayerOne(newPlayerOne);
    } else {
      newPlayerTwo = playerTwo + current;
      setPlayerTwo(newPlayerTwo);
    }

    if (newPlayerOne >= 100) {
      alert("Player 1 winner");
      setPlayerOne(0);
      setPlayerTwo(0);
      setCurrent(0);
    } else if (newPlayerTwo >= 100) {
      alert("Player 2 winner");
      setPlayerOne(0);
      setPlayerTwo(0);
      setCurrent(0);
    }
  }

  return (
    <main className="page">
      <div className="board">
        <section
          className="player yellow"
          style={{
            backgroundColor: player
              ? "rgba(255, 255, 255, 0.6)"
              : "rgba(255, 255, 255, 0.3)",
          }}
        >
          <h2>Player 1</h2>
          <div className="score">{playerOne}</div>

          <div className="current-box">
            <span className="label">CURRENT</span>
            <span className="current-score">{player ? current : 0}</span>
          </div>
        </section>

        <img className="dice" src={imageUrl} />

        <section
          className="player red"
          style={{
            backgroundColor: player
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(255, 255, 255, 0.6)",
          }}
        >
          <h2>Player 2</h2>
          <div className="score">{playerTwo}</div>

          <div className="current-box">
            <span className="label">CURRENT</span>
            <span className="current-score">{!player ? current : 0}</span>
          </div>
        </section>
        <button onClick={Roll} className="btn">
          Roll
        </button>
        <button onClick={Hold} className="btn2">
          Hold
        </button>
      </div>
    </main>
  );
}

export default App;
