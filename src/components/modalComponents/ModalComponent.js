/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect } from "react";
import useCompareValues from "../../hooks/useCompareValues";
import "./modal-style.css";
import star from "../../assets/startPage/Circle-icons-star.svg.png";
import { useRecoilState } from "recoil";
import { SortedArrayFromServerAtom } from "../../assets/statesManager/classmentAtom";
import Clssm from "../../assets/startPage/classement.png";

const ModalComponent = ({ localStoreScores, openModal, setOpenModal }) => {
  const { compareValues } = useCompareValues();
  const [sortedArrayScore, setSortedArrayScore] = useRecoilState(
    SortedArrayFromServerAtom
  );

  useEffect(() => {
    if (sortedArrayScore.length === 0 && localStoreScores.length > 0) {
      const arrayForSort = [...localStoreScores];

      setSortedArrayScore(
        arrayForSort.map((res) => res).sort(compareValues("score", "desc"))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compareValues, sortedArrayScore, localStoreScores]);

  return (
    <>
      <button className="classment-button" onClick={() => setOpenModal(true)}>
        <a href="#id01">
          <img style={{ filter: "none " }} src={Clssm} alt="cards" width={70} />
          Global classment
        </a>
      </button>

      {openModal && localStoreScores && (
        <div className="container" id="top">
          <div id="id01" className="modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <header className=" headerModal">
                  <a href="#top" className="closebtn">
                    ×
                  </a>
                  <h2
                    style={{ fontSize: 20, textAlign: "center", marginTop: 5 }}
                  >
                    Global scores classment{" "}
                    <span style={{ fontSize: 12 }}>
                      ({localStoreScores.length} players)
                    </span>
                  </h2>
                </header>
                <div className="containerModal">
                  <div className="post_content entry-content">
                    <div
                      className="webSite webSite-6133"
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className="webSite-inner"
                        style={{
                          width: "70%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 12,
                        }}
                      >
                        <div className="webSite-section-wrap">
                          <section className="webSite-section webSite-top-section webSite-element webSite-element-3f8598c4 webSite-section-boxed webSite-section-height-default webSite-section-height-default sc_fly_static">
                            <div className="webSite-container webSite-column-gap-extended">
                              <div className="webSite-row">
                                <div className="webSite-column webSite-col-100 webSite-top-column webSite-element webSite-element-a6cb6c9 sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static">
                                  <div className="webSite-column-wrap webSite-element-populated">
                                    <div className="webSite-widget-wrap">
                                      <div className="webSite-element webSite-element-7a96c8c8 sc_fly_static webSite-widget webSite-widget-spacer">
                                        <div className="webSite-widget-container">
                                          <div className="webSite-spacer">
                                            <div className="webSite-spacer-inner"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="webSite-section webSite-top-section webSite-element webSite-element-719648e9 webSite-section-boxed webSite-section-height-default webSite-section-height-default sc_fly_static">
                            <div className="webSite-container webSite-column-gap-extended">
                              <div className="webSite-row">
                                <div className="webSite-column webSite-col-100 webSite-top-column webSite-element webSite-element-8959e6e sc_inner_width_none sc_content_align_inherit sc_layouts_column_icons_position_left sc_fly_static">
                                  <div className="webSite-column-wrap webSite-element-populated">
                                    <div className="webSite-widget-wrap">
                                      <div className="webSite-element webSite-element-490ac0a8 sc_fly_static webSite-widget webSite-widget-text-editor">
                                        <div className="webSite-widget-container">
                                          <div className="webSite-text-editor webSite-clearfix">
                                            <div className="global-classment__container">
                                              {sortedArrayScore.map(
                                                (res, index) => {
                                                  index += 1;

                                                  return (
                                                    <ol
                                                      key={index}
                                                      className="global-classment__inner custom-counter"
                                                    >
                                                      <li>
                                                        <div className="numerSection">
                                                          {index <= 5 ? (
                                                            <div className="numerSection">
                                                              <Fragment>
                                                                <img
                                                                  src={star}
                                                                  alt="star"
                                                                  width={40}
                                                                />
                                                                <p
                                                                  style={{
                                                                    color:
                                                                      "purple",
                                                                    fontWeight:
                                                                      "bold",
                                                                  }}
                                                                >
                                                                  {index}
                                                                </p>
                                                              </Fragment>
                                                            </div>
                                                          ) : (
                                                            <div className="numerSection">
                                                              <span
                                                                style={{
                                                                  textAlign:
                                                                    "center",
                                                                }}
                                                              >
                                                                {index}
                                                              </span>
                                                            </div>
                                                          )}
                                                        </div>
                                                        <div className="name-section">
                                                          <span
                                                            style={{
                                                              textAlign:
                                                                "center",
                                                            }}
                                                          >
                                                            Name:
                                                            <p
                                                              style={{
                                                                fontSize: 20,
                                                                fontWeight:
                                                                  "bold",
                                                              }}
                                                            >
                                                              {res.name}
                                                            </p>
                                                          </span>
                                                          <span
                                                            style={{
                                                              display: "flex",
                                                              alignItems:
                                                                "center",
                                                              jusifyContent:
                                                                "space-around",
                                                              width: "100%",
                                                              textAlign:
                                                                "center",
                                                              paddingBottom:
                                                                "1rem",
                                                            }}
                                                          >
                                                            Score:
                                                            <p
                                                              style={{
                                                                marginLeft:
                                                                  "1rem",
                                                                fontSize: 20,
                                                                fontWeight:
                                                                  "bold",
                                                              }}
                                                            >
                                                              {res.score}
                                                            </p>
                                                          </span>
                                                        </div>
                                                        <div className="country-section">
                                                          <p>
                                                            {res.country.substring(
                                                              0,
                                                              18
                                                            ) + ""}
                                                          </p>
                                                          <span className="flag-icon">
                                                            <span
                                                              className={`flag-icon flag-icon-${res.flagCode}`}
                                                              style={{
                                                                transform:
                                                                  "scale(1.9)",
                                                                filter:
                                                                  "drop-shadow(0 0 0.1rem black)",
                                                                borderRadius: 37,
                                                              }}
                                                            />
                                                          </span>
                                                          <span className="date-time__container">
                                                            {res.date},{" "}
                                                            {res.time}
                                                          </span>
                                                        </div>
                                                      </li>
                                                    </ol>
                                                  );
                                                }
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className=" footerModal">
                  <span>
                    The ranking is organised from highest to lowest score.
                  </span>
                </footer>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
