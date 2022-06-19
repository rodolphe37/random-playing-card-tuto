import useCumulatorController from "../hooks/useCumulatorController";

const CumulatorComponent = ({ scoreArray }) => {
  const { scoreFinal } = useCumulatorController({ scoreArray });

  return <span className="CumulScoreEachReload">Score: {scoreFinal} Pts</span>;
};

export default CumulatorComponent;
