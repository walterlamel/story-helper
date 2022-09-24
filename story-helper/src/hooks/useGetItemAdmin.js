import { useEffect, useState } from "react";

const urlApi = process.env.REACT_APP_URL_API;

const useGetItemAdmin = (type, refresh) => {
       const [list, setList] = useState({});
       const [error, setError] = useState();

       useEffect(() => {
              fetch(urlApi + "all/" + type)
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
       }, [type, refresh]);

       return { list, error };
};

export default useGetItemAdmin;
