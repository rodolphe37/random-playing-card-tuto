import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { classmentAtom } from "../assets/statesManager/classmentAtom";
import useCumulatorController from "../hooks/useCumulatorController";
import useFlagByCountry from "../hooks/useFlagByCountry";
import { BASE_URL } from "../utils/fetchUrls";
import SelectCountry from "./SelectCountry";

const ScoreForm = ({ scoreArray, setScoreSended }) => {
  let navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [classmentFromState, setClassmentFromState] =
    useRecoilState(classmentAtom);
  const [name, setName] = useState("");
  const { country, setCountry, setDataCountryCode, dataCountryCode } =
    useFlagByCountry();
  const { classmentFinal } = useCumulatorController({ scoreArray });

  useEffect(() => {
    console.log(
      "%cScore Component mounted start",
      "color: white;  font-weight:bold; background-color:green;padding: 2px"
    );
    console.log("classment from ScoreForm", classmentFinal);
    console.log(
      "%cScore Component mounted end",
      "color: white;  font-weight:bold; background-color:darkgreen;padding: 2px"
    );
  }, [classmentFinal]);

  const sendStatusToServer = async () => {
    const payload = {
      status: "published",
      name: name,
      country: country,
      score: classmentFinal.pts,
      flagCode: dataCountryCode,
    };
    await axios.post(`${BASE_URL}/classment/`, payload).then(() => {
      try {
        setClassmentFromState({ pts: 0, name: "" });
        sessionStorage.clear();
        setScoreSended(true);
        console.log("SUCCES");
      } catch (error) {
        console.error("not sended", error);
      }
    });
  };

  const handleReloadGame = async () => {
    await sendStatusToServer().then(() => {
      navigate("/");
      window.location.reload();
    });
  };

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
        <button onClick={handleReloadGame} className="SendingButton">
          Send Score.
        </button>
      </span>
    </div>
  );
};

export default ScoreForm;
