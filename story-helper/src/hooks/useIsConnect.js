import { useEffect, useState } from "react";

export const useIsConnect = () => {
       const [isConnect, setIsConnect] = useState(false);

       useEffect(() => {
              getApi();
       });

       async function getApi() {
              await fetch(process.env.REACT_APP_API_USER + "isConnect", {
                     credentials: "include",
              })
                     .then((res) => res.json())
                     .then(
                            (data) => {
                                   console.log(data);
                                   if (data.user) {
                                          setIsConnect(true);
                                   } else {
                                          setIsConnect(false);
                                   }
                            },
                            (err) => {
                                   console.log(err);
                                   setIsConnect(false);
                            },
                     );
       }

       return { isConnect };
};

export default useIsConnect;
