import { useEffect, useState } from "react";

const urlApi = process.env.REACT_APP_URL_API;

const useApi = (loadApi = false, what = "") => {
       const [result, setResult] = useState(null);
       const [error, setError] = useState(false);
       const [isOk, setIsOk] = useState(false);
       const [loading, setLoading] = useState(false);

       useEffect(() => {
              setLoading(true);

              let url = urlApi + what;

              fetch(url)
                     .then((res) => res.json())
                     .then(
                            (resultat) => {
                                   //console.log(resultat);
                                   setIsOk(true);
                                   setResult(resultat);
                                   setLoading(false);
                            },
                            (error) => {
                                   console.log("Erreur dans la connexion");
                                   console.log(error);
                                   setIsOk(false);
                                   setError(error);
                                   setLoading(false);
                            },
                     );
       }, [loadApi, what]);

       return { result, error, loading, isOk };
};

export default useApi;
