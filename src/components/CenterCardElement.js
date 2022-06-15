import FigureCardCenter from "./FigureCardCenter";

const CenterCardElement = ({ number, symbol, name }) => {
  return (
    <>
      {[...Array(Number(number))].map((_symb, index) => {
        index += 1;
        return (
          <span className="centerCard" key={index}>
            <span className="center-symbol-sigle">
              {number >= 0 && number <= 10 ? symbol : ""}
            </span>
          </span>
        );
      })}
      {number === 11 || number === 12 || number === 13 ? (
        <FigureCardCenter number={number} name={name} />
      ) : (
        ""
      )}
    </>
  );
};

export default CenterCardElement;
