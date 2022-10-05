import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PLACE, INTRIGUE, PERSO } from "../data/type";
import useApi from "../hooks/useApi";

export function getName(type) {
       switch (type) {
              case PLACE:
                     return "Lieux";
              case INTRIGUE:
                     return "Actions";
              case PERSO:
                     return "Personnages";
              default:
                     return "Type inexistant...";
       }
}

const Column = ({ type }) => {
       const [loadApi, setLoadApi] = useState(0);
       const { result, loading } = useApi(loadApi, type);
       const [lastId, setLastId] = useState(false);

       useEffect(() => {
              if (lastId && lastId === result.id) {
                     setLoadApi((prev) => prev + 1);
              }
              setLastId(result?.id);
       }, [result]);

       function getIcon() {
              switch (type) {
                     case PLACE:
                            return "lieux.png";
                     case INTRIGUE:
                            return "actions.png";
                     case PERSO:
                            return "perso.png";
                     default:
                            return "";
              }
       }

       return (
              <div
                     className={
                            "column" +
                            " " +
                            type +
                            " " +
                            (loading ? "loading" : "")
                     }
              >
                     <div className="header">
                            <div className="container-icon">
                                   <img src={"/" + getIcon()} alt="" />
                            </div>
                            <h3>-{getName(type)}-</h3>

                            <motion.div
                                   className="contain-reload"
                                   whileHover={{ scale: 1.1 }}
                                   whileTap={{ scale: 0.8 }}
                                   onClick={(e) =>
                                          setLoadApi((prev) => prev + 1)
                                   }
                            >
                                   <img src="/reload.png" alt="" />
                                   <div className="back"></div>
                            </motion.div>
                     </div>
                     <div className="container-element">
                            <h2>{result?.name}</h2>
                            <p className="desc">{result?.desc} </p>
                     </div>
              </div>
       );
};

export default Column;
