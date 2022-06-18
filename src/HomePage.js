import StartPage from "./components/StartPage";
import useStartGameLogic from "./hooks/useStartGameLogic";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "./hooks/useSessionStorage";

function HomePage() {
  let navigate = useNavigate();
  const [classmentFinal, setClassmentFinal] = useSessionStorage("classment", {
    pts: 0,
    name: "",
  });
  const { setStartGame, scoreArray } = useStartGameLogic();

  const handleStartGame = () => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);
    setStartGame(true);

    setClassmentFinal({
      ...classmentFinal,
      pts: classmentFinal.pts + cumulScore,
    });
    window.location.replace("game");
  };

  return (
    <>
      <StartPage setStartGame={handleStartGame} />
    </>
  );
}

export default HomePage;
