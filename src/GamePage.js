import CenterPageApp from "./components/CenterPageApp";
import { useSessionStorage } from "./hooks/useSessionStorage";
import useStartGameLogic from "./hooks/useStartGameLogic";

const GamePage = () => {
  const { scoreArray, setScoreSended, numberOfReload } = useStartGameLogic();
  const [classmentFinal] = useSessionStorage("classment", {
    pts: 0,
    name: "",
  });

  return (
    <CenterPageApp
      classmentFinal={classmentFinal}
      scoreArray={scoreArray}
      setScoreSended={setScoreSended}
      numberOfReload={numberOfReload}
    />
  );
};

export default GamePage;
