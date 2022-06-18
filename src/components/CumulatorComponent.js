import { useEffect, useRef, useState } from "react";
import useCumulatorController from "../hooks/useCumulatorController";

const CumulatorComponent = ({ scoreArray }) => {
  const { scoreFinal } = useCumulatorController({ scoreArray });
  const [score, setScore] = useState();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted) return;
    isMounted.current = true;
    if (isMounted) {
      setScore(scoreFinal);
      console.log("score:", score);
      isMounted.current = false;
    }
  }, [score, scoreFinal]);

  return (
    <span className="CumulScoreEachReload">
      Score: {scoreFinal && scoreFinal} Pts
    </span>
  );
};

export default CumulatorComponent;
