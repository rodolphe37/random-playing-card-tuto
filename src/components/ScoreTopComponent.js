import useCumulatorController from "../hooks/useCumulatorController";

const ScoreTopComponent = ({ scoreArray }) => {
  const { numberOfReload, classmentFinal } = useCumulatorController({
    scoreArray,
  });
  return (
    <span
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <span>Total score: {classmentFinal.pts}Pts</span>
      <p
        style={{
          color:
            numberOfReload === 3
              ? "red"
              : numberOfReload === 4
              ? "grey"
              : "white",
        }}
      >
        Reloads: {numberOfReload}/4
      </p>
    </span>
  );
};

export default ScoreTopComponent;
