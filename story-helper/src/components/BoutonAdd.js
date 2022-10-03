import React from "react";
import { motion } from "framer-motion";

const BoutonAdd = ({ setPopupOpen }) => {
       return (
              <div
                     className="container-btn-add"
                     onClick={(e) => setPopupOpen(true)}
              >
                     <motion.div
                            className="btn-add"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                     >
                            <img src="/add.png" alt="" />
                            <p>Proposer</p>
                     </motion.div>
              </div>
       );
};

export default BoutonAdd;
