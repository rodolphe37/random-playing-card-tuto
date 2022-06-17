import StartPage from "./components/StartPage";
import useStartGameLogic from "./hooks/useStartGameLogic";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

  const { setStartGame } = useStartGameLogic();

  const handleStartGame = () => {
    setStartGame(true);
    navigate("/game");
  };

  return (
    <>
      <StartPage setStartGame={handleStartGame} />
    </>
  );
}

export default HomePage;
