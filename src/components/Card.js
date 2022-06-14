import BorderCardFigureConditions from "./BorderCardFigureConditions";
import FigureCardCenter from "./FigureCardCenter";

const Card = ({ number, color, symbol, name }) => {
  return (
    <div className="card-container">
      <div className={`card-content__inner ${name}`}>
        <div className={`card-content-inner__border-top ${color}`}>
          <div className="top-symbol ">
            <BorderCardFigureConditions number={number} />
            <span className="top-symbol-sigle">{symbol}</span>
          </div>
          <div />
        </div>
        <div className={`card-content-inner__center grid-${number} ${color}`}>
          {[...Array(Number(number))].map((symb, index) => {
            index += 1;
            return (
              <span className="centerCard" key={index}>
                <span name={symb} className="center-symbol-sigle">
                  {number >= 0 && number <= 10 ? symbol : null}
                </span>
              </span>
            );
          })}
          {number === 11 || number === 12 || number === 13 ? (
            <FigureCardCenter number={number} name={name} />
          ) : null}
        </div>
        <div className={`card-content-inner__border-bottom ${color}`}>
          <div />
          <div className="bottom-symbol ">
            <span className="bottom-symbol-sigle">{symbol}</span>
            <BorderCardFigureConditions number={number} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
