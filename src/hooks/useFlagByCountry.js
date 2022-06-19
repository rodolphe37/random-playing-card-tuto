import { useEffect, useState } from "react";

const useFlagByCountry = () => {
  const [country, setCountry] = useState("");
  const [dataCountryCode, setDataCountryCode] = useState("");

  useEffect(() => {
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
      case "Indonesia":
        setDataCountryCode("idn");
        break;
      case "Isle of Man":
        setDataCountryCode("imn");
        break;
      case "India":
        setDataCountryCode("ind");
        break;
      case "British Indian Ocean Territory":
        setDataCountryCode("iot");
        break;
      case "Ireland":
        setDataCountryCode("irl");
        break;
      case "Iran, Islamic Republic of":
        setDataCountryCode("irn");
        break;
      case "Iraq":
        setDataCountryCode("irq");
        break;
      case "Iceland":
        setDataCountryCode("isl");
        break;
      case "Israel":
        setDataCountryCode("isr");
        break;
      case "Italy":
        setDataCountryCode("ita");
        break;
      case "Jamaica":
        setDataCountryCode("jam");
        break;
      case "Jersey":
        setDataCountryCode("jey");
        break;
      case "Jordan":
        setDataCountryCode("jor");
        break;
      case "Japan":
        setDataCountryCode("jpn");
        break;
      case "Kazakstan":
        setDataCountryCode("kaz");
        break;
      case "Kenya":
        setDataCountryCode("ken");
        break;
      case "Kyrgyzstan":
        setDataCountryCode("kgz");
        break;
      case "Cambodia":
        setDataCountryCode("khm");
        break;
      case "Kiribati":
        setDataCountryCode("kir");
        break;
      case "Saint Kitts and Nevis":
        setDataCountryCode("kna");
        break;
      case "Korea, Democratic People's Republic of":
        setDataCountryCode("kor");
        break;
      case "Kuwait":
        setDataCountryCode("kwt");
        break;
      case "Lao People's Democratic Republic":
        setDataCountryCode("lao");
        break;
      case "Lebanon":
        setDataCountryCode("lbn");
        break;
      case "Liberia":
        setDataCountryCode("lbr");
        break;
      case "Libyan Arab Jamahiriya":
        setDataCountryCode("lby");
        break;
      case "Saint Lucia":
        setDataCountryCode("lca");
        break;
      case "Liechtenstein":
        setDataCountryCode("lie");
        break;
      case "Sri Lanka":
        setDataCountryCode("lka");
        break;
      case "Lesotho":
        setDataCountryCode("lso");
        break;
      case "Lithuania":
        setDataCountryCode("ltu");
        break;
      case "Luxembourg":
        setDataCountryCode("lux");
        break;
      case "Latvia":
        setDataCountryCode("lva");
        break;
      case "Marokko":
        setDataCountryCode("mar");
        break;
      case "Monaco":
        setDataCountryCode("mco");
        break;
      case "Moldova, Republic of":
        setDataCountryCode("mda");
        break;
      case "Madagascar":
        setDataCountryCode("mdg");
        break;
      case "Maldives":
        setDataCountryCode("mdv");
        break;
      case "Mexico":
        setDataCountryCode("mex");
        break;
      case "Marshall Islands":
        setDataCountryCode("mhl");
        break;
      case "Makedonia":
        setDataCountryCode("mkd");
        break;
      case "Mali":
        setDataCountryCode("mli");
        break;
      case "Malta":
        setDataCountryCode("mlt");
        break;
      case "Myanmar":
        setDataCountryCode("mmr");
        break;
      case "Montenegro":
        setDataCountryCode("mne");
        break;
      case "Mongolia":
        setDataCountryCode("mng");
        break;
      case "Northern Mariana Islands":
        setDataCountryCode("mnp");
        break;
      case "Mozambique":
        setDataCountryCode("moz");
        break;
      case "Mauritania":
        setDataCountryCode("mrt");
        break;
      case "Montserrat":
        setDataCountryCode("msr");
        break;
      case "Martinique":
        setDataCountryCode("mtq");
        break;
      case "Mauritius":
        setDataCountryCode("mus");
        break;
      case "Malawi":
        setDataCountryCode("mwi");
        break;
      case "Malaysia":
        setDataCountryCode("mys");
        break;
      case "Mayotte":
        setDataCountryCode("myt");
        break;
      case "Namibia":
        setDataCountryCode("nam");
        break;
      case "New Caledonia":
        setDataCountryCode("ncl");
        break;
      case "Niger":
        setDataCountryCode("ner");
        break;
      case "Norfolk Island":
        setDataCountryCode("nfk");
        break;
      case "Nigeria":
        setDataCountryCode("nga");
        break;
      case "Nicaragua":
        setDataCountryCode("nic");
        break;
      case "Niue":
        setDataCountryCode("niu");
        break;
      case "Netherlands":
        setDataCountryCode("nld");
        break;
      case "Norway":
        setDataCountryCode("nor");
        break;
      case "Nepal":
        setDataCountryCode("npl");
        break;
      case "Nauru":
        setDataCountryCode("nru");
        break;
      case "New Zealand":
        setDataCountryCode("nzl");
        break;
      case "Oman":
        setDataCountryCode("omn");
        break;
      case "Pakistan":
        setDataCountryCode("pak");
        break;
      case "Panama":
        setDataCountryCode("pan");
        break;
      case "Pitcairn":
        setDataCountryCode("pcn");
        break;
      case "Peru":
        setDataCountryCode("per");
        break;
      case "Philippines":
        setDataCountryCode("phl");
        break;
      case "Palau":
        setDataCountryCode("plw");
        break;
      case "Papua New Guinea":
        setDataCountryCode("png");
        break;
      case "Poland":
        setDataCountryCode("pol");
        break;
      case "Puerto Rico":
        setDataCountryCode("pri");
        break;
      case "Portugal":
        setDataCountryCode("prt");
        break;
      case "Paraguay":
        setDataCountryCode("pry");
        break;
      case "State of Palestine":
        setDataCountryCode("pse");
        break;
      case "French Polynesia":
        setDataCountryCode("pyf");
        break;
      case "Qatar":
        setDataCountryCode("qat");
        break;
      case "Reunion":
        setDataCountryCode("reu");
        break;
      case "Romania":
        setDataCountryCode("rou");
        break;
      case "Russian Federation":
        setDataCountryCode("rus");
        break;
      case "Rwanda":
        setDataCountryCode("rwa");
        break;
      case "Saudi Arabia":
        setDataCountryCode("sau");
        break;
      case "Sudan":
        setDataCountryCode("sdn");
        break;
      case "Senegal":
        setDataCountryCode("sen");
        break;
      case "Singapore":
        setDataCountryCode("sgp");
        break;
      case "South Georgia and The South Sandwich Islands":
        setDataCountryCode("sgs");
        break;
      case "Saint Helena":
        setDataCountryCode("shn");
        break;
      case "Svalbard and Jan Mayen":
        setDataCountryCode("sjm");
        break;
      case "Solomon Islands":
        setDataCountryCode("slb");
        break;
      case "Sierra Leone":
        setDataCountryCode("sle");
        break;
      case "El Salvador":
        setDataCountryCode("slv");
        break;
      case "San Marino":
        setDataCountryCode("smr");
        break;
      case "Somalia":
        setDataCountryCode("som");
        break;
      case "Saint Pierre and Miquelon":
        setDataCountryCode("spm");
        break;
      case "Serbia":
        setDataCountryCode("srb");
        break;
      case "South Sudan":
        setDataCountryCode("ssd");
        break;
      case "Sao Tome and Principe":
        setDataCountryCode("stp");
        break;
      case "Suriname":
        setDataCountryCode("sur");
        break;
      case "Slovakia":
        setDataCountryCode("svk");
        break;
      case "Slovenia":
        setDataCountryCode("svn");
        break;
      case "Sweden":
        setDataCountryCode("swe");
        break;
      case "Swaziland":
        setDataCountryCode("swz");
        break;
      case "Seychelles":
        setDataCountryCode("syc");
        break;
      case "Syrian Arab Republic":
        setDataCountryCode("syr");
        break;
      case "Turks and Caicos Islands":
        setDataCountryCode("tca");
        break;
      case "Chad":
        setDataCountryCode("tcd");
        break;
      case "Togo":
        setDataCountryCode("tgo");
        break;
      case "Thailand":
        setDataCountryCode("tha");
        break;
      case "Tajikistan":
        setDataCountryCode("tjk");
        break;
      case "Tokelau":
        setDataCountryCode("tkl");
        break;
      case "Turkmenistan":
        setDataCountryCode("tkm");
        break;
      case "Timor-Leste":
        setDataCountryCode("tls");
        break;
      case "Tonga":
        setDataCountryCode("ton");
        break;
      case "Trinidad and Tobago":
        setDataCountryCode("tto");
        break;
      case "Tunisia":
        setDataCountryCode("tun");
        break;
      case "Turkey":
        setDataCountryCode("tur");
        break;
      case "Tuvalu":
        setDataCountryCode("tuv");
        break;
      case "Taiwan":
        setDataCountryCode("twn");
        break;
      case "Tanzania, United Republic of":
        setDataCountryCode("tza");
        break;
      case "Uganda":
        setDataCountryCode("uga");
        break;
      case "Ukraine":
        setDataCountryCode("ukr");
        break;
      case "United States Minor Outlying Islands":
        setDataCountryCode("umi");
        break;
      case "Uruguay":
        setDataCountryCode("ury");
        break;
      case "United States":
        setDataCountryCode("usa");
        break;
      case "Uzbekistan":
        setDataCountryCode("uzb");
        break;
      case "Vanuatu":
        setDataCountryCode("vat");
        break;
      case "Holy See (Vatican City State)":
        setDataCountryCode("vct");
        break;
      case "Venezuela":
        setDataCountryCode("ven");
        break;
      case "Virgin Islands, British":
        setDataCountryCode("vgb");
        break;
      case "Virgin Islands, U.S.":
        setDataCountryCode("vir");
        break;
      case "Vietnam":
        setDataCountryCode("vnm");
        break;
      case "Wallis and Futuna":
        setDataCountryCode("wlf");
        break;
      case "Yemen":
        setDataCountryCode("yem");
        break;
      case "South Africa":
        setDataCountryCode("zaf");
        break;
      case "Zambia":
        setDataCountryCode("zmb");
        break;
      case "Zimbabwe":
        setDataCountryCode("zwe");
        break;
      default:
        break;
    }
  }, [country, setDataCountryCode]);
  return {
    country,
    setCountry,
    setDataCountryCode,
    dataCountryCode,
  };
};

export default useFlagByCountry;
