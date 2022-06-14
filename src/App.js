import "./App.css";
import CardsWrapper from "./components/CardsWrapper";

function App() {
  return (
    <div className="App">
      <CardsWrapper cardsNumber="5" />
      <button onClick={() => window.location.reload()}>Reload Card</button>
    </div>
  );
}

export default App;
