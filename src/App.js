import "./App.css";
import CardsWrapper from "./components/CardsWrapper";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "white" }}>
        Are you lucky game.
      </h1>
      <div className="App__wrapper-container">
        <CardsWrapper cardsNumber="5" />
      </div>
    </div>
  );
}

export default App;
