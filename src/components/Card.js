import { useEffect, useRef } from "react";
import BorderCardFigureConditions from "./BorderCardFigureConditions";
import CenterCardElement from "./CenterCardElement";

const Card = ({
  numberArray,
  color,
  symbol,
  name,
  randomValueArray,
  scoreArray,
  cardsNumber,
}) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted) {
      return;
    }
    isMounted.current = true;
    if (
      numberArray.id === randomValueArray.id &&
      scoreArray.length < Number(cardsNumber)
    ) {
      scoreArray.push(randomValueArray.score);
      isMounted.current = false;
    }
  }, [isMounted, scoreArray, numberArray, randomValueArray, cardsNumber]);
  return (
    <div className="card-container">
      <p
        style={{
          position: "absolute",
          width: "14rem",
          textAlign: "center",
          color: "lightgrey",
        }}
      >
        Card pts: {randomValueArray.score}
      </p>
      <div className={`card-content__inner ${name}`}>
        <div className={`card-content-inner__border-top ${color}`}>
          <div className="top-symbol ">
            <BorderCardFigureConditions number={numberArray.number} />
            <span className="top-symbol-sigle">{symbol}</span>
          </div>
          <div />
        </div>
        <div
          className={`card-content-inner__center grid-${numberArray.number} ${color}`}
        >
          <CenterCardElement
            number={numberArray.number}
            symbol={symbol}
            name={name}
          />
        </div>
        <div className={`card-content-inner__border-bottom ${color}`}>
          <div />
          <div className="bottom-symbol ">
            <span className="bottom-symbol-sigle">{symbol}</span>
            <BorderCardFigureConditions number={numberArray.number} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
