import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import useGetItemAdmin from "../hooks/useGetItemAdmin";
import useGetTypes from "../hooks/useGetTypes";

const Admin = () => {
       const [loadApi, setLoadApi] = useState(0);
       const [selectedType, setSelectedType] = useState("");
       const { types } = useGetTypes();
       const { list } = useGetItemAdmin(selectedType, loadApi);

       function handleChangeType(e) {
              setSelectedType(e.target.value);
       }

       useEffect(() => {
              console.log(list);
       }, [list]);

       return (
              <div className="App">
                     <div className="container-table">
                            <form action="">
                                   <label htmlFor="types">
                                          <select
                                                 name="type"
                                                 onChange={(e) =>
                                                        handleChangeType(e)
                                                 }
                                          >
                                                 <option value="all">
                                                        Tous
                                                 </option>
                                                 {types?.map((type, key) => (
                                                        <option
                                                               key={key}
                                                               value={type.name}
                                                        >
                                                               {
                                                                      type.visible_name
                                                               }
                                                        </option>
                                                 ))}
                                          </select>
                                   </label>
                            </form>

                            <table>
                                   <tbody>
                                          {list?.map((item, key) => (
                                                 <tr key={key}>
                                                        <td>{item.name}</td>
                                                        <td>
                                                               {item.type.name}
                                                        </td>
                                                        <td>
                                                               <input
                                                                      type="checkbox"
                                                                      name="is_active"
                                                                      id=""
                                                                      checked={
                                                                             item.is_active
                                                                      }
                                                               />
                                                        </td>
                                                 </tr>
                                          ))}
                                   </tbody>
                            </table>
                     </div>

                     <footer>v1.0 - Kevin Soulhol</footer>
                     <div className="background"></div>
              </div>
       );
};

export default Admin;
