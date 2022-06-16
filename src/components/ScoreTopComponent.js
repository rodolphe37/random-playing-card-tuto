import { useEffect, useRef, useState } from "react";
import useCumulatorController from "../hooks/useCumulatorController";

const ScoreTopComponent = ({ scoreArray }) => {
  const { numberOfReload, classmentFinal } = useCumulatorController({
    scoreArray,
  });
  const [scorePerLoad, setScorePerLoad] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted) return;
    isMounted.current = true;
    if (isMounted) {
      if (classmentFinal && classmentFinal.pts !== scorePerLoad) {
        setScorePerLoad(classmentFinal.pts);
        isMounted.current = false;
      }
      console.log("clas", classmentFinal);
    }
  }, [classmentFinal, scorePerLoad]);

  return (
    <span
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        marginTop: "2rem",
        marginBottom: "5rem",
      }}
    >
      <span>Total score: {scorePerLoad}Pts</span>
      <p style={{ color: numberOfReload === 3 ? "red" : "white" }}>
        Reloads: {numberOfReload}/4
      </p>
    </span>
  );
};

export default ScoreTopComponent;
