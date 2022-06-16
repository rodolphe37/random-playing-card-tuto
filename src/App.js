import { useState } from "react";
import "./App.css";
import CardsWrapper from "./components/CardsWrapper";
import ScoreTopComponent from "./components/ScoreTopComponent";
import { useSessionStorage } from "./hooks/useSessionStorage";

function App() {
  const [scoreArray] = useState([]);
  const [numberOfReload] = useSessionStorage("reloads", 0);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "white" }}>
        Are you lucky game.
      </h1>
      <ScoreTopComponent scoreArray={scoreArray} />
      <CardsWrapper
        numberOfReload={numberOfReload}
        scoreArray={scoreArray}
        cardsNumber="5"
      />
      <div className="button-container">
        <button onClick={() => window.location.reload()}>Reload Card</button>
      </div>
    </div>
  );
}

export default App;
