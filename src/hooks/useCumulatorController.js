import { useCallback, useEffect, useMemo, useRef } from "react";
import { useSessionStorage } from "./useSessionStorage";

const useCumulatorController = ({ scoreArray }) => {
  const [scoreFinal, setScoreFinal] = useSessionStorage("score", 0);
  const [numberOfReload, setNumberOfReload] = useSessionStorage("reloads", 0);
  const [classmentFinal, setClassmentFinal] = useSessionStorage("classment", {
    pts: 0,
    name: "",
  });
  const isLoading = useRef(false);

  const handleClassment = useCallback(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);

    setScoreFinal(cumulScore);
    setNumberOfReload(numberOfReload + 1);
  }, [numberOfReload, scoreArray, setNumberOfReload, setScoreFinal]);

  const memoizedClassment = useMemo(() => handleClassment, [handleClassment]);

  useEffect(() => {
    const cumulScore = scoreArray.reduce((accum, item) => accum + item, 0);
    if (!isLoading) return;
    isLoading.current = true;
    if (isLoading) {
      memoizedClassment();
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
  };
};

export default useCumulatorController;
