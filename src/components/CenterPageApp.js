import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { SortedArrayFromServerAtom } from "../assets/statesManager/classmentAtom";
import CardsWrapper from "./CardsWrapper";
import ScoreTopComponent from "./ScoreTopComponent";

const CenterPageApp = ({
  classmentFinal,
  scoreArray,
  setScoreSended,
  numberOfReload,
}) => {
  const [sortedArrayScore] = useRecoilState(SortedArrayFromServerAtom);
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
        sortedArrayScore={sortedArrayScore}
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
