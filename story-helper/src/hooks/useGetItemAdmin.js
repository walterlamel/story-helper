import { useEffect, useState } from "react";
import env from "react-dotenv";

const urlApi = env.REACT_APP_URL_API;

const useGetItemAdmin = (type, refresh) => {
       const [list, setList] = useState([]);
       const [error, setError] = useState();
       const [params, setParams] = useState({});

       useEffect(() => {
              let url = urlApi + "all/" + type;
              if (params) {
                     url = url + "?";
                     Object.keys(params).forEach(function (key, index) {
                            url = url + key + "=" + params[key] + "&";
                     });
              }

              //console.log(url);

              fetch(url)
                     .then((res) => res.json())
                     .then(
                            (resultat) => {
                                   //console.log(resultat);
                                   setList(resultat);
                            },
                            (error) => {
                                   console.log("Erreur dans la connexion");
                                   console.log(error);
                                   setError(error);
                            },
                     );
       }, [type, refresh, params]);

       return { list, error, setParams };
};

export default useGetItemAdmin;
