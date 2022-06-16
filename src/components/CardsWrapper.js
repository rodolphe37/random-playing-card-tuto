import Card from "./Card";
import { numbers, colors, symbols } from "../data";
import useRandomValueFromArray from "../hooks/useRandomValueFromArray";
import { Fragment, useEffect, useState } from "react";
import CumulatorComponent from "./CumulatorComponent";
import useCumulatorController from "../hooks/useCumulatorController";
import ScoreForm from "./ScoreForm";

const CardsWrapper = ({ cardsNumber }) => {
  const cardNumbers = cardsNumber;
  const { randomValueFromArray } = useRandomValueFromArray();
  const [scoreArray] = useState([]);
  const { numberOfReload, classmentFinal } = useCumulatorController({
    scoreArray,
  });

  useEffect(() => {
    console.log("scoreArray", scoreArray);
    console.log("number of reloads", numberOfReload);
  }, [scoreArray, numberOfReload]);

  return (
    <>
      <span
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "2rem",
          marginBottom: "5rem",
        }}
      >
        <span>Total score: {classmentFinal.pts}Pts</span>
        <p style={{ color: numberOfReload === 3 ? "red" : "white" }}>
          Reloads: {numberOfReload}/3
        </p>
        <CumulatorComponent scoreArray={scoreArray} />
      </span>
      <div
        className={`modal-form ${
          numberOfReload === 3 ? "scale-in-center" : "hidden"
        }`}
      >
        <ScoreForm
          classmentFinal={classmentFinal.pts}
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
      <span
        style={{
          width: "100%",
          marginBottom: "8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button
          onClick={() =>
            numberOfReload < 3
              ? window.location.reload()
              : alert(
                  "the number of retries is reached (3 retries per session)"
                )
          }
        >
          {numberOfReload === 3 ? "finish for this session" : "Reload Card"}
        </button>
      </span>
    </>
  );
};

export default CardsWrapper;
