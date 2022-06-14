const Card = ({ number, color, symbol, name }) => {
  return (
    <div className="card-container">
      <div className={`card-content__inner ${name}`}>
        <div className={`card-content-inner__border-top ${color}`}>
          <div className="top-symbol ">
            <p>{number}</p>
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
                  {symbol}
                </span>
              </span>
            );
          })}
        </div>
        <div className={`card-content-inner__border-bottom ${color}`}>
          <div />
          <div className="bottom-symbol ">
            <span className="bottom-symbol-sigle">{symbol}</span>
            <p>{number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
