import useCumulatorController from "../hooks/useCumulatorController";

const Cumulator = ({ scoreArray }) => {
  const { scoreFinal } = useCumulatorController({ scoreArray });

  return scoreFinal !== 0 ? (
    <span style={{ color: "white", fontSize: 22 }}>
      Score: {scoreFinal} Pts
    </span>
  ) : null;
};

export default Cumulator;
