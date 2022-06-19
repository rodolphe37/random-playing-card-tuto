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
    </>
  );
};

export default CenterPageApp;
