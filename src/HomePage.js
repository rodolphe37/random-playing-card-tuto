import StartPage from "./components/StartPage";
import useStartGameLogic from "./hooks/useStartGameLogic";
import { useCallback } from "react";

function HomePage() {
  const { setStartGame } = useStartGameLogic();

  const handleStartGame = useCallback(() => {
    setStartGame(true);

    window.location.replace("/game");
  }, [setStartGame]);

  return (
    <>
      <StartPage setStartGame={handleStartGame} />
    </>
  );
}

export default HomePage;
