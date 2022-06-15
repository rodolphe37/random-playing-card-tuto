import { useEffect, useState } from "react";

const Cumulator = ({ scoreArray }) => {
  const [scoreFinal, setScoreFinal] = useState(0);

  useEffect(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);
    setScoreFinal(cumulScore);
    console.log("cumul", cumulScore);
  }, [setScoreFinal, scoreArray]);

  return (
    <span style={{ color: "white", fontSize: 22 }}>
      Score: {scoreFinal} Pts
    </span>
  );
};

export default Cumulator;
