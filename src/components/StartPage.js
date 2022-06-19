import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Cards from "../assets/startPage/cards.png";
import {
  globalClassmentAtom,
  SortedArrayFromServerAtom,
} from "../assets/statesManager/classmentAtom";
import useFetchData from "../hooks/useFetchData";
import GlobalClassmentComponent from "./GlobalClassmentComponent";
import cards from "../assets/startPage/blackjack.png";
import FirstOfList from "./FirstOfList";

const StartPage = ({ setStartGame }) => {
  const { getData } = useFetchData();
  const [globalClassment] = useRecoilState(globalClassmentAtom);
  const [localStoreScores, setLocalStoreScores] = useState([]);
  const [sortedArrayScore] = useRecoilState(SortedArrayFromServerAtom);
  const [winnerOfMoment, setWinnerOfMoment] = useState([]);

  useEffect(() => {
    if (sortedArrayScore.length > 0 && winnerOfMoment.length === 0) {
      setWinnerOfMoment(sortedArrayScore[0]);
    }
  }, [sortedArrayScore, winnerOfMoment]);

  const getAllScores = useCallback(async () => {
    await getData();
  }, [getData]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (globalClassment.length === 0) {
      getAllScores(signal);
    }
    if (globalClassment.length !== localStoreScores.length) {
      const newArrayOfScore = globalClassment.map((res) => res);
      setLocalStoreScores(newArrayOfScore);
    }

    return () => {
      controller.abort(signal);
    };
  }, [globalClassment, getAllScores, localStoreScores]);

  return (
    <div className="start-page__container">
      {winnerOfMoment ? <FirstOfList winnerOfMoment={winnerOfMoment} /> : ""}
      <div className="buttons-container">
        <div className="start-page__footer">
          <button
            title="start the game now"
            className="start-button"
            onClick={setStartGame}
          >
            <img
              style={{ filter: "none " }}
              src={cards}
              alt="cards"
              width={70}
            />
            <span>StartGame</span>
          </button>
        </div>

        {globalClassment.length > 0 ? (
          <GlobalClassmentComponent
            localStoreScores={localStoreScores}
            globalClassment={globalClassment}
          />
        ) : (
          ""
        )}
        <div />
      </div>
      <div className="start-page__header">
        <h1>Are you the luckiest person alive? </h1>
      </div>

      <div className="start-page__center">
        <div className="header-rule__container">
          <h4>Try and see the ranking of the luckiest...</h4>
          <img
            className="card-start-page"
            src={Cards}
            alt="cards"
            width={190}
          />
        </div>
        <div className="rules__container">
          <h5>The rule!</h5>
          <ul className="rule-list">
            <li>
              Each card represents a sum of points, there are 5 cards per
              reload, and only 4 reloads per session.
            </li>
            <li>At the end of the 4 reloads, the points are added up.</li>
            <li>
              Once the game is over, a form asks you to enter your nickname and
              your country, then send the result to the server to enter the
              ranking.
            </li>
            <li>
              The ranking is ordered in descending order (from first to last).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
