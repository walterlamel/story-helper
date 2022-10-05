import { useEffect, useState } from "react";
import env from "react-dotenv";

export const useGetTypes = () => {
       const [types, setTypes] = useState([]);

       useEffect(() => {
              fetch(env.REACT_APP_URL_API + "type")
                     .then((res) => res.json())
                     .then(
                            (data) => setTypes(data),
                            (err) => console.log(err),
                     );
       }, []);

       return { types };
};

export default useGetTypes;
