import { useEffect, useState } from "react";

export const useGetTypes = () => {
       const [types, setTypes] = useState([]);

       useEffect(() => {
              fetch(process.env.REACT_APP_URL_API + "type")
                     .then((res) => res.json())
                     .then(
                            (data) => setTypes(data),
                            (err) => console.log(err),
                     );
       }, []);

       return { types };
};

export default useGetTypes;
