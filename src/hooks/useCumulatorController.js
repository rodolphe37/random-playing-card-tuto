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
  const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);

  const handleClassment = useCallback(() => {
    setNumberOfReload(numberOfReload + 1);
  }, [numberOfReload, setNumberOfReload]);

  useEffect(() => {
    console.log(
      "%cCumulator hook mounted start",
      "color: white;  font-weight:bold; background-color:orange;padding: 2px"
    );

    if (cumulScore !== 0 || scoreArray.length > 0) {
      setScoreFinal(cumulScore);
    }
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
    console.log(
      "%cCumulator hook mounted end",
      "color: black;  font-weight:bold; background-color:orange;padding: 2px"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scoreArray, setScoreFinal, cumulScore, setClassmentFinal]);

  useEffect(() => {
    handleClassment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    scoreFinal,
    numberOfReload,
    classmentFinal,
    score,
    setScore,
  };
};

export default useCumulatorController;
