import React from "react";
import { useNavigate } from "react-router-dom";

const Deconnect = () => {
       const navigate = useNavigate();

       const deconnection = () => {
              fetch(process.env.REACT_APP_API_USER + "disconnect", {
                     credentials: "include",
              })
                     .then((res) => res.json())
                     .then(
                            (data) => {
                                   console.log(data);
                                   navigate("/");
                            },
                            (err) => {
                                   console.log(err);
                            },
                     );
       };

       return (
              <button className="btn-deco" onClick={deconnection}>
                     Se déconnecter
              </button>
       );
};

export default Deconnect;
