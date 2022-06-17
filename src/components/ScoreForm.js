import { useState } from "react";
import useCumulatorController from "../hooks/useCumulatorController";
import useFlagByCountry from "../hooks/useFlagByCountry";
import SelectCountry from "./SelectCountry";

const ScoreForm = ({ scoreArray }) => {
  const [name, setName] = useState("");
  const { country, setCountry, setDataCountryCode, dataCountryCode } =
    useFlagByCountry();
  const { classmentFinal } = useCumulatorController({ scoreArray });

  console.log("clss", classmentFinal.pts);

  return (
    <div className="infos">
      <span>You must enter your nickName and country for classment scores</span>
      <div className="inputs-container">
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <SelectCountry
          setDataCountryCode={setDataCountryCode}
          country={country}
          setCountry={setCountry}
        />
      </div>
      {name !== "" && country !== "" ? (
        <div className="bottomFormSection">
          <div className="infosResume">
            <span className="nameSection">
              {name !== "" ? `NickName: ${name}` : ""}
            </span>
            {country !== "" ? (
              <span className="infos-container">
                <span className="country-name">{`Country: ${country} `}</span>

                <span className="flag-icon">
                  <span
                    className={`flag-icon flag-icon-${dataCountryCode}`}
                    style={{
                      transform: "scale(1.9)",
                      filter: "drop-shadow(0 0 0.1rem black)",
                      borderRadius: 37,
                    }}
                  />
                </span>
              </span>
            ) : null}
          </div>
          <div
            className="ScoreSection"
            style={name !== "" && country !== "" ? { height: "15vh" } : {}}
          >
            <div className="header-score-content">Score :</div>
            <div className="score-innercontent">{`${classmentFinal.pts}pts`}</div>
          </div>
        </div>
      ) : (
        <div className="bottomFormSection">
          <div className="ScoreSection">
            <div className="header-score-content">Score :</div>
            <div className="score-innercontent">{`${classmentFinal.pts}pts`}</div>
          </div>
        </div>
      )}
      <br />
      <span>
        <button
          onClick={() =>
            alert(
              `Your NickName is :${name}, Your Country is: ${country}, and your score is:${classmentFinal.pts}pts`
            )
          }
          className="SendingButton"
        >
          Send Score.
        </button>
      </span>
    </div>
  );
};

export default ScoreForm;
