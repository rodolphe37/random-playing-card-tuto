import { Route, Routes } from "react-router-dom";
import Sigles1 from "./assets/startPage/sigles-1.png";
import Sigles2 from "./assets/startPage/sigles-2.png";
import "./App.css";
import HomePage from "./HomePage";
import GamePage from "./GamePage";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={Sigles1} alt="sigles" width={90} />
        <h1 style={{ textAlign: "center", color: "white" }}>
          are you lucky - the game
        </h1>
        <img src={Sigles2} alt="sigles" width={90} />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
};

export default App;
