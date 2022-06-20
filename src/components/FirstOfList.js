import { Fragment } from "react";
import star from "../assets/startPage/Circle-icons-star.svg.png";

const FirstOfList = ({ winnerOfMoment }) => {
  const { name, country, flagCode, date, time, score } = winnerOfMoment;

  return (
    <div
      title="The first of the moment!"
      className="first-of-classment-list__container"
    >
      <ol className="global-classment__inner custom-counter startPageWinner">
        <h4>The winner of moment!</h4>
        <li>
          <div className="numerSection">
            <div className="numerSection">
              <Fragment>
                <img src={star} alt="star" width={40} />
                <p
                  style={{
                    color: "purple",
                    fontWeight: "bold",
                  }}
                >
                  1
                </p>
              </Fragment>
            </div>
          </div>
          <div className="name-section">
            <span
              style={{
                textAlign: "center",
              }}
            >
              Name:
              <p
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {name && name}
              </p>
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                jusifyContent: "space-around",
                width: "100%",
                textAlign: "center",
                paddingBottom: "1rem",
              }}
            >
              Score:
              <p
                style={{
                  marginLeft: "1rem",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {score && score}
              </p>
            </span>
          </div>
          <div className="country-section">
            <p>{country && country.substring(0, 18) + ""}</p>
            <span className="flag-icon">
              <span
                className={`flag-icon flag-icon-${flagCode}`}
                style={{
                  transform: "scale(1.9)",
                  filter: "drop-shadow(0 0 0.1rem black)",
                  borderRadius: 37,
                }}
              />
            </span>
            <span className="date-time__container">
              {date}, {time}
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default FirstOfList;
