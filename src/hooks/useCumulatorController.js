import { useCallback, useEffect, useRef } from "react";
import { useSessionStorage } from "./useSessionStorage";

const useCumulatorController = ({ scoreArray }) => {
  const [scoreFinal, setScoreFinal] = useSessionStorage("score");
  const [numberOfReload, setNumberOfReload] = useSessionStorage("reloads", 0);
  const [classmentFinal, setClassmentFinal] = useSessionStorage("classment", {
    pts: 0,
    name: "",
  });
  const isLoading = useRef(false);

  const handleClassment = useCallback(() => {
    setNumberOfReload(numberOfReload + 1);
  }, [numberOfReload, setNumberOfReload]);

  useEffect(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);
    if (!isLoading) return;
    isLoading.current = true;
    if (isLoading && scoreFinal !== 0) {
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

      isLoading.current = false;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scoreArray, setClassmentFinal]);

  return {
    scoreFinal,
    setScoreFinal,
    numberOfReload,
    classmentFinal,
  };
};

export default useCumulatorController;
