import React, { useState } from "react";
import { motion } from "framer-motion";
import useApi from "../hooks/useApi";
import defaultimg from "../assets/img/default-place.jpg";

const ContainIdea = ({ type }) => {
       const [loadApi, setLoadApi] = useState(0);
       const { result, error, isOk } = useApi(loadApi, type);

       return (
              <motion.div
                     className={"idea " + type}
                     whileHover={{
                            boxShadow: "0 0 50px rgba(255, 255, 255, 0.1)",
                     }}
              >
                     <div className="contain-design">
                            <div className="bordure"></div>
                            <div className="container-bg">
                                   <img
                                          src={result?.img ?? defaultimg}
                                          alt=""
                                   />
                            </div>
                            <div
                                   className={
                                          "degrade degrade-haut degr_" + type
                                   }
                            ></div>
                            <div
                                   className={
                                          "degrade degrade-bas degr_" + type
                                   }
                            ></div>
                     </div>
                     <div className="contain-text">
                            <div className="contain-title">
                                   <h2>{type}</h2>
                            </div>
                            <div className="contain-bottom">
                                   <div className="contain-infos">
                                          {isOk ? (
                                                 <>
                                                        <h3>{result?.name}</h3>
                                                        <p>{result?.desc}</p>
                                                 </>
                                          ) : (
                                                 <div className="msg-error">
                                                        {error.message}
                                                 </div>
                                          )}
                                   </div>
                                   <div className="contain-btn">
                                          <motion.button
                                                 whileHover={{ scale: 1.1 }}
                                                 whileTap={{ scale: 0.8 }}
                                                 onClick={(e) =>
                                                        setLoadApi(
                                                               (prev) =>
                                                                      prev + 1,
                                                        )
                                                 }
                                          >
                                                 Piocher
                                          </motion.button>
                                   </div>
                            </div>
                     </div>
              </motion.div>
       );
};

export default ContainIdea;
