import Card from "./Card";
import { numbers, colors, symbols } from "../data";
import useRandomValueFromArray from "../hooks/useRandomValueFromArray";
import { Fragment, useEffect, useState } from "react";
import Cumulator from "./Cumulator";

const CardsWrapper = ({ cardsNumber }) => {
  const cardNumbers = cardsNumber;
  const { randomValueFromArray } = useRandomValueFromArray();
  const [scoreArray] = useState([]);

  useEffect(() => {
    console.log("scoreArray", scoreArray);
  }, [scoreArray]);

  return (
    <>
      <Cumulator scoreArray={scoreArray} />
      <div className="card-wrapper">
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
