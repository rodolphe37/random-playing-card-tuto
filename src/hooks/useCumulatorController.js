import { useCallback, useEffect, useState } from "react";
import { useSessionStorage } from "./useSessionStorage";

const useCumulatorController = ({ scoreArray }) => {
  const [scoreFinal, setScoreFinal] = useSessionStorage("score", 0);
  const [numberOfReload, setNumberOfReload] = useSessionStorage("reloads", 0);
  const [classmentFinal, setClassmentFinal] = useSessionStorage("classment", {
    pts: 0,
    name: "",
  });
  const [score, setScore] = useState(0);

  const handleClassment = useCallback(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);

    setScoreFinal(cumulScore);
    setNumberOfReload(numberOfReload + 1);
  }, [numberOfReload, scoreArray, setNumberOfReload, setScoreFinal]);

  useEffect(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);

    handleClassment();
    if (classmentFinal.pts === 0) {
      setClassmentFinal({
        ...classmentFinal,
        pts: cumulScore,
      });
    } else {
      setClassmentFinal({
        ...classmentFinal,
        pts: classmentFinal.pts + cumulScore,
      });
    }

    console.log("cumulScore from hook", cumulScore);

    return () => {
      setNumberOfReload(0);
      setScoreFinal(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scoreArray, setClassmentFinal]);

  return {
    scoreFinal,
    numberOfReload,
    classmentFinal,
    score,
    setScore,
  };
};

export default useCumulatorController;
