import { useEffect, useState } from "react";

const CumulatorComponent = ({ scoreArray }) => {
  const [scoreFinal, setScoreFinal] = useState(0);

  useEffect(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);
    if (cumulScore !== 0) {
      setScoreFinal(cumulScore);
    }
    console.log("cumul", cumulScore);
  }, [setScoreFinal, scoreArray]);

  return <span className="CumulScoreEachReload">Score: {scoreFinal} Pts</span>;
};

export default CumulatorComponent;
