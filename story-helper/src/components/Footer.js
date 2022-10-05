import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
       const navigate = useNavigate();

       return (
              <>
                     <footer onClick={(e) => navigate("/admin")}>
                            v{process.env.REACT_APP_VERSION ?? "1.0"} - Kevin
                            Soulhol
                     </footer>

                     <div className="background"></div>
              </>
       );
};

export default Footer;
