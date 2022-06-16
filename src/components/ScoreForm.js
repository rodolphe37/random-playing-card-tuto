import { useEffect, useRef, useState } from "react";
import SelectCountry from "./SelectCountry";

const ScoreForm = ({ classmentFinal }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [dataCountryCode, setDataCountryCode] = useState("");
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    if (isMounted) {
      switch (country) {
        case "Aruba":
          setDataCountryCode("abw");
          break;
        case "Afghanistan":
          setDataCountryCode("afg");
          break;
        case "Angola":
          setDataCountryCode("ago");
          break;
        case "Anguilla":
          setDataCountryCode("aia");
          break;
        case "Åland Islands":
          setDataCountryCode("ala");
          break;
        case "Albania":
          setDataCountryCode("alb");
          break;
        case "Andorra":
          setDataCountryCode("and");
          break;
        case "United Arab Emirates":
          setDataCountryCode("are");
          break;
        case "Argentina":
          setDataCountryCode("arg");
          break;
        case "Armenia":
          setDataCountryCode("arm");
          break;
        case "American Samoa":
          setDataCountryCode("asm");
          break;
        case "Antarctica":
          setDataCountryCode("ata");
          break;
        case "French Southern Territories":
          setDataCountryCode("atf");
          break;
        case "Antigua and Barbuda":
          setDataCountryCode("atg");
          break;
        case "Australia":
          setDataCountryCode("aus");
          break;
        case "Austria":
          setDataCountryCode("aut");
          break;
        case "Azerbaijan":
          setDataCountryCode("aze");
          break;
        case "Burundi":
          setDataCountryCode("bdi");
          break;
        case "Belgium":
          setDataCountryCode("bel");
          break;
        case "Benin":
          setDataCountryCode("ben");
          break;
        case "Bonaire, Sint Eustatius and Saba":
          setDataCountryCode("bes");
          break;
        case "Burkina Faso":
          setDataCountryCode("bfa");
          break;
        case "Bangladesh":
          setDataCountryCode("bgd");
          break;
        case "Bulgaria":
          setDataCountryCode("bgr");
          break;
        case "Bahrain":
          setDataCountryCode("bhr");
          break;
        case "Bahamas":
          setDataCountryCode("bhs");
          break;
        case "Bosnia and Herzegovina":
          setDataCountryCode("bih");
          break;
        case "Saint Barthélemy":
          setDataCountryCode("blm");
          break;
        case "Belarus":
          setDataCountryCode("blr");
          break;
        case "Belize":
          setDataCountryCode("blz");
          break;
        case "Bermuda":
          setDataCountryCode("bmu");
          break;
        case "Bolivia (Plurinational State of Bolivia)":
          setDataCountryCode("bol");
          break;
        case "Brasil":
          setDataCountryCode("bra");
          break;
        case "Barbados":
          setDataCountryCode("brb");
          break;
        case "Brunei Darussalam":
          setDataCountryCode("brn");
          break;
        case "Bhutan":
          setDataCountryCode("btn");
          break;
        case "Bouvet Island":
          setDataCountryCode("bvt");
          break;
        case "Botswana":
          setDataCountryCode("bwa");
          break;
        case "Central African Republic":
          setDataCountryCode("caf");
          break;
        case "Canada":
          setDataCountryCode("can");
          break;
        case "Catalonia (autonomous community in Spain)":
          setDataCountryCode("cat");
          break;
        case "Cocos (Keeling) Islands":
          setDataCountryCode("cck");
          break;
        case "Switzerland":
          setDataCountryCode("che");
          break;
        case "Chile":
          setDataCountryCode("chl");
          break;
        case "China (People's Republic of China)":
          setDataCountryCode("chn");
          break;
        case "Côte d'Ivoire":
          setDataCountryCode("civ");
          break;
        case "Cameroon":
          setDataCountryCode("cmr");
          break;
        case "Congo (Democratic Republic of the Congo)":
          setDataCountryCode("cod");
          break;
        case "Congo (Congo-Brazzaville)":
          setDataCountryCode("cog");
          break;
        case "Cook Islands":
          setDataCountryCode("cok");
          break;
        case "Colombia":
          setDataCountryCode("col");
          break;
        case "Comoros":
          setDataCountryCode("com");
          break;
        case "Cabo Verde":
          setDataCountryCode("cpv");
          break;
        case "Costa Rica":
          setDataCountryCode("cri");
          break;
        case "Cuba":
          setDataCountryCode("cub");
          break;
        case "Curaçao":
          setDataCountryCode("cuw");
          break;
        case "Christmas Island":
          setDataCountryCode("cxr");
          break;
        case "Cayman Islands":
          setDataCountryCode("cym");
          break;
        case "Cyprus":
          setDataCountryCode("cyp");
          break;
        case "Czech Republic":
          setDataCountryCode("cze");
          break;
        case "Germany (Federal Republic of Germany)":
          setDataCountryCode("deu");
          break;
        case "Djibouti":
          setDataCountryCode("dji");
          break;
        case "Dominica":
          setDataCountryCode("dma");
          break;
        case "Denmark":
          setDataCountryCode("dnk");
          break;
        case "Dominican Republic":
          setDataCountryCode("dom");
          break;
        case "Algeria":
          setDataCountryCode("dza");
          break;
        case "Ecuador":
          setDataCountryCode("ecu");
          break;
        case "Egypt":
          setDataCountryCode("egy");
          break;
        case "England (country that is part of the United Kingdom)":
          setDataCountryCode("eng");
          break;
        case "Eritrea":
          setDataCountryCode("eri");
          break;
        case "Western Sahara":
          setDataCountryCode("esh");
          break;
        case "Spain":
          setDataCountryCode("esp");
          break;
        case "Estonia":
          setDataCountryCode("est");
          break;
        case "Ethiopia":
          setDataCountryCode("eth");
          break;
        case "European Union (EU)":
          setDataCountryCode("eun");
          break;
        case "Finland":
          setDataCountryCode("fin");
          break;
        case "Fiji":
          setDataCountryCode("fji");
          break;
        case "Falkland Islands (Malvinas)":
          setDataCountryCode("flk");
          break;
        case "France":
          setDataCountryCode("fra");
          break;
        case "Faroe Islands":
          setDataCountryCode("fro");
          break;
        case "Micronesia (Federated States of Micronesia)":
          setDataCountryCode("fsm");
          break;
        case "Gabon":
          setDataCountryCode("gab");
          break;
        case "United Kingdom":
          setDataCountryCode("gbr");
          break;
        case "Georgia":
          setDataCountryCode("geo");
          break;
        case "Guernsey":
          setDataCountryCode("ggy");
          break;
        case "Ghana":
          setDataCountryCode("gha");
          break;
        case "Gibraltar":
          setDataCountryCode("gib");
          break;
        case "Guinea":
          setDataCountryCode("gin");
          break;
        case "Guadeloupe":
          setDataCountryCode("glp");
          break;
        case "Gambia":
          setDataCountryCode("gmb");
          break;
        case "Guinea-Bissau":
          setDataCountryCode("gnb");
          break;
        case "Equatorial Guinea":
          setDataCountryCode("gnq");
          break;
        case "Greece":
          setDataCountryCode("grc");
          break;
        case "Grenada":
          setDataCountryCode("grd");
          break;
        case "Greenland":
          setDataCountryCode("grl");
          break;
        case "Guatemala":
          setDataCountryCode("gtm");
          break;
        case "French Guiana":
          setDataCountryCode("guf");
          break;
        case "Guam":
          setDataCountryCode("gum");
          break;
        case "Guyana":
          setDataCountryCode("guy");
          break;
        case "Hong Kong":
          setDataCountryCode("hkg");
          break;
        case "Heard Island and McDonald Islands":
          setDataCountryCode("hmd");
          break;
        case "Honduras":
          setDataCountryCode("hnd");
          break;
        case "Croatia":
          setDataCountryCode("hrv");
          break;
        case "Haiti":
          setDataCountryCode("hti");
          break;
        case "Hungary":
          setDataCountryCode("hun");
          break;
        default:
          break;
      }
    }

    return () => (isMounted.current = false);
  }, [country, setDataCountryCode]);
  console.log("name - country", name, country);
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
            <div className="score-innercontent">{`${classmentFinal}pts`}</div>
          </div>
        </div>
      ) : (
        <div className="bottomFormSection">
          <div className="ScoreSection">
            <div className="header-score-content">Score :</div>
            <div className="score-innercontent">{`${classmentFinal}pts`}</div>
          </div>
        </div>
      )}
      <br />
      <span>
        <button
          onClick={() =>
            alert(
              `Your NickName is :${name}, Your Country is: ${country}, and your score is:${classmentFinal}pts`
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
