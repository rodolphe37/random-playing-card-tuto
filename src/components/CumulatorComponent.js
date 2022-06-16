import { useEffect } from "react";
import useCumulatorController from "../hooks/useCumulatorController";

const CumulatorComponent = ({ scoreArray }) => {
  const { scoreFinal, setScoreFinal } = useCumulatorController({ scoreArray });

  useEffect(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);
    setScoreFinal(cumulScore);
    console.log("cumul", cumulScore);
  }, [setScoreFinal, scoreArray]);

  return <span className="CumulScoreEachReload">Score: {scoreFinal} Pts</span>;
};

export default CumulatorComponent;
