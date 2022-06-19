import { useEffect, useState } from "react";
import { useSessionStorage } from "./useSessionStorage";

const useStartGameLogic = () => {
  const [scoreArray] = useState([]);
  const [numberOfReload] = useSessionStorage("reloads", 0);
  const [classmentFinal] = useSessionStorage("classment", {
    pts: 0,
    name: "",
  });
  const [startGame, setStartGame] = useState(localStorage.getItem("startGame"));
  const [scoreSended, setScoreSended] = useState(false);

  useEffect(() => {
    if (!startGame) {
      sessionStorage.clear();
    }
    if (startGame) {
      localStorage.setItem("startGame", "yes");
    }
    if (scoreSended) {
      localStorage.removeItem("startGame");
      sessionStorage.clear();
      window.location.reload();
    }
  }, [startGame, scoreSended]);
  return {
    startGame,
    classmentFinal,
    scoreArray,
    setScoreSended,
    numberOfReload,
    setStartGame,
  };
};

export default useStartGameLogic;
