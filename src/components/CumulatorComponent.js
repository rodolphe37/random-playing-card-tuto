import { useEffect } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";

const CumulatorComponent = ({ scoreArray }) => {
  const [scoreFinal, setScoreFinal] = useSessionStorage("score", 0);

  useEffect(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);
    setScoreFinal(cumulScore);
    console.log("cumul", cumulScore);
  }, [setScoreFinal, scoreArray]);

  return <span className="CumulScoreEachReload">Score: {scoreFinal} Pts</span>;
};

export default CumulatorComponent;
