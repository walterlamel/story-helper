import { useEffect, useState } from "react";

//const urlApi = "http://127.0.0.1:3333/";
const urlApi = process.env.REACT_APP_URL_API;

const useApi = (loadApi = false, what = "") => {
       const [result, setResult] = useState(null);
       const [error, setError] = useState(false);
       const [isOk, setIsOk] = useState(false);

       useEffect(() => {
              let url = urlApi + what;

              fetch(url)
                     .then((res) => res.json())
                     .then(
                            (resultat) => {
                                   setIsOk(true);
                                   console.log(resultat);
                            },
                            (error) => {
                                   console.log("Erreur dans la connexion");
                                   console.log(error);
                                   setIsOk(false);
                                   setError(error);
                            },
                     );
       }, []);

       useEffect(() => {
              let url = urlApi + what;

              fetch(url)
                     .then((res) => res.json())
                     .then(
                            (resultat) => {
                                   setResult(resultat);
                            },
                            (error) => {
                                   setError(error);
                            },
                     );
       }, [loadApi]);

       return { result, error, isOk };
};

export default useApi;
