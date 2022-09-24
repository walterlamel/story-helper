import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const varianttext = {
       hover: { top: "-3em", opacity: 0.7 },
       hidden: { top: "2em", opacity: 0 },
};

const BoutonAdd = ({ setPopupOpen }) => {
       const [hovering, setHovering] = useState(false);

       return (
              <div
                     className="container-btn-add"
                     onMouseOver={(e) => setHovering(true)}
                     onMouseOut={(e) => setHovering(false)}
                     onClick={(e) => setPopupOpen(true)}
              >
                     <motion.button
                            className="btn-add"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                     ></motion.button>
                     <motion.div
                            className="bulle-add"
                            animate={
                                   hovering
                                          ? varianttext.hover
                                          : varianttext.hidden
                            }
                     >
                            Proposer une idée
                     </motion.div>
              </div>
       );
};

export default BoutonAdd;
