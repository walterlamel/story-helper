import { useEffect, useState } from "react";

const urlApi = process.env.REACT_APP_URL_API;

const useGetTypes = (loadApi = false, what = "") => {
       const [types, setTypes] = useState(null);
       const [errorTypes, setErrorTypes] = useState(false);
       const [loadingTypes, setLoadingTypes] = useState(false);

       useEffect(() => {
              setLoadingTypes(true);

              let url = urlApi + "type";

              fetch(url)
                     .then((res) => res.json())
                     .then(
                            (resultat) => {
                                   //console.log(resultat);
                                   setTypes(resultat);
                                   setLoadingTypes(false);
                            },
                            (error) => {
                                   console.log("Erreur dans la connexion");
                                   console.log(error);
                                   setErrorTypes(error);
                                   setLoadingTypes(false);
                            },
                     );
       }, [loadApi, what]);

       return { types, errorTypes, loadingTypes };
};

export default useGetTypes;
