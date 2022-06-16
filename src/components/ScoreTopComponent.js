import { useEffect, useState } from "react";
import useCumulatorController from "../hooks/useCumulatorController";

const ScoreTopComponent = ({ scoreArray }) => {
  const { numberOfReload, classmentFinal } = useCumulatorController({
    scoreArray,
  });
  const [ptsForEachReload, setPtsForEachRelaod] = useState();

  useEffect(() => {
    const { pts } = classmentFinal;
    if (classmentFinal && pts !== 0) {
      setPtsForEachRelaod(pts);
    }
    console.log("pts", pts);
  }, [classmentFinal]);
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
      <span>Total score: {ptsForEachReload}Pts</span>
      <p style={{ color: numberOfReload === 3 ? "red" : "white" }}>
        Reloads: {numberOfReload}/4
      </p>
    </span>
  );
};

export default ScoreTopComponent;
