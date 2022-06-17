import { useEffect } from "react";
import CardsWrapper from "./CardsWrapper";
import ScoreTopComponent from "./ScoreTopComponent";

const CenterPageApp = ({
  classmentFinal,
  scoreArray,
  setScoreSended,
  numberOfReload,
}) => {
  useEffect(() => {
    console.log("classment from center Page", classmentFinal);
  }, [classmentFinal]);
  return (
    <>
      {classmentFinal && (
        <ScoreTopComponent
          classmentFinal={classmentFinal}
          scoreArray={scoreArray}
        />
      )}
      <CardsWrapper
        setScoreSended={setScoreSended}
        numberOfReload={numberOfReload}
        scoreArray={scoreArray}
        cardsNumber="5"
      />
      <div className="button-container">
        <button onClick={() => window.location.reload()}>Reload Card</button>
      </div>
    </>
  );
};

export default CenterPageApp;
