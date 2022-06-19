import Card from "./Card";
import { numbers, colors, symbols } from "../data";
import useRandomValueFromArray from "../hooks/useRandomValueFromArray";
import { Fragment, useEffect } from "react";

import CumulatorComponent from "./CumulatorComponent";
import ScoreForm from "./ScoreForm";

const CardsWrapper = ({
  cardsNumber,
  scoreArray,
  numberOfReload,
  setScoreSended,
  sortedArrayScore,
}) => {
  const cardNumbers = cardsNumber;
  const { randomValueFromArray } = useRandomValueFromArray();

  useEffect(() => {
    console.log(
      "%cCardsWrapper mounted start",
      "color: white;  font-weight:bold; background-color:purple;padding: 2px"
    );
    console.log("scoreArray", scoreArray);
    console.log(
      "%cCardsWrapper mounted end",
      "color: white;  font-weight:bold; background-color:purple;padding: 2px"
    );
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
          numberOfReload === 3 ? "slide-in-top " : "hidden"
        }`}
      >
        <ScoreForm
          sortedArrayScore={sortedArrayScore}
          setScoreSended={setScoreSended}
          scoreArray={scoreArray}
          numberOfReload={numberOfReload}
        />
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
