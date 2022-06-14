import Card from "./Card";
import { numbers, colors, symbols } from "../data";

const CardsWrapper = () => {
  const cardNumbers = 5;

  let alreadyDone = [];
  const randomValueFromArray = (myArray) => {
    if (alreadyDone.length === 0) {
      for (let i = 0; i < myArray.length; i++) alreadyDone.push(i);
    }
    let randomValueIndex = Math.floor(Math.random() * alreadyDone.length);
    let indexOfItemInMyArray = alreadyDone[randomValueIndex];

    alreadyDone.splice(randomValueIndex, 1);

    return myArray[indexOfItemInMyArray];
  };

  return (
    <div className="card-wrapper">
      {[...Array(Number(cardNumbers))].map((numb, index) => {
        index += 1;
        const randomSymbols =
          symbols[Math.floor(Math.random() * symbols.length)];
        return (
          <Card
            key={index}
            name={randomSymbols.name}
            number={randomValueFromArray(numbers).number}
            color={
              randomSymbols.name === "spade" || randomSymbols.name === "club"
                ? `${colors[1].color}`
                : `${colors[0].color}`
            }
            symbol={randomSymbols.symbol}
          />
        );
      })}
    </div>
  );
};

export default CardsWrapper;
