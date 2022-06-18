import { useEffect, useRef } from "react";
import useCumulatorController from "../hooks/useCumulatorController";

const CumulatorComponent = ({ scoreArray }) => {
  const { scoreFinal, score, setScore } = useCumulatorController({
    scoreArray,
  });

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted) return;
    isMounted.current = true;
    if (isMounted) {
      setScore(scoreFinal);
      console.log("score:", score);
      isMounted.current = false;
    }
  }, [score, setScore, scoreFinal]);

  return (
    <span className="CumulScoreEachReload">
      Score: {scoreFinal && scoreFinal} Pts
    </span>
  );
};

export default CumulatorComponent;
