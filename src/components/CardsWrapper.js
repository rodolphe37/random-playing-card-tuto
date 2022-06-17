import Card from "./Card";
import { numbers, colors, symbols } from "../data";
import useRandomValueFromArray from "../hooks/useRandomValueFromArray";
import { Fragment, useEffect } from "react";

import CumulatorComponent from "./CumulatorComponent";
import ScoreForm from "./ScoreForm";

const CardsWrapper = ({ cardsNumber, scoreArray, numberOfReload }) => {
  const cardNumbers = cardsNumber;
  const { randomValueFromArray } = useRandomValueFromArray();

  useEffect(() => {
    console.log("scoreArray", scoreArray);
    console.log("number of session", +1);
  }, [scoreArray, numberOfReload]);

  return (
    <>
      <div
        className={`card-wrapper ${
          numberOfReload === 3 ? "scale-out-center" : ""
        }`}
      >
        <CumulatorComponent scoreArray={scoreArray} />
      </div>

      <div
        className={`modal-form ${
          numberOfReload === 3 ? "scale-in-center" : "hidden"
        }`}
      >
        <ScoreForm scoreArray={scoreArray} numberOfReload={numberOfReload} />
      </div>
      <div
        className={`card-wrapper ${
          numberOfReload === 3 ? "scale-out-center" : ""
        }`}
      >
        {[...Array(Number(cardNumbers))].map((_numb, index) => {
          index += 1;
          const randomSymbols =
            symbols[Math.floor(Math.random() * symbols.length)];
          const randomValueArray = randomValueFromArray(numbers);

          return (
            <Fragment key={index}>
              <Card
                cardsNumber={cardsNumber}
                scoreArray={scoreArray}
                randomValueArray={randomValueArray}
                name={randomSymbols.name}
                numberArray={randomValueArray}
                color={
                  randomSymbols.name === "spade" ||
                  randomSymbols.name === "club"
                    ? `${colors[1].color}`
                    : `${colors[0].color}`
                }
                symbol={randomSymbols.symbol}
              />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default CardsWrapper;
