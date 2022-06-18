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
    console.log(
      "%cclassment from center Page",
      "font-weight: bold; color:#871F78; padding: 2px",
      classmentFinal
    );
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
      <div
        className={`button-container ${
          numberOfReload === 3 ? "scale-out-center" : ""
        }`}
      >
        <button onClick={() => window.location.reload()}>Reload Card</button>
      </div>
    </>
  );
};

export default CenterPageApp;
