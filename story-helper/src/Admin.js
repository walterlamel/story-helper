import React, { useEffect, useState } from "react";
import PopupModify from "./components/PopupModify";
import { deleteItem } from "./hooks/api";
import useGetItemAdmin from "./hooks/useGetItemAdmin";

const urlApi = process.env.REACT_APP_URL_API;

const Admin = () => {
       //const [list, setList] = useState([]);
       const [selected, setSelected] = useState(false);
       const [popupOpen, setPopupOpen] = useState(false);
       const [onglet, setOnglet] = useState("intrigue");
       const [refresh, setRefresh] = useState(1);
       const { list, error } = useGetItemAdmin(onglet, refresh);

       return (
              <div className="App page-admin">
                     <PopupModify
                            open={popupOpen}
                            setPopupOpen={setPopupOpen}
                            idea={selected}
                            typeDefault={onglet}
                            setRefresh={setRefresh}
                     />
                     <div className="container-table">
                            <div className="contain-onglet">
                                   <div
                                          className={
                                                 "onglet intrigue " +
                                                 (onglet === "intrigue"
                                                        ? "select"
                                                        : "")
                                          }
                                          onClick={(e) => setOnglet("intrigue")}
                                   >
                                          Intrigues
                                   </div>
                                   <div
                                          className={
                                                 "onglet place " +
                                                 (onglet === "place"
                                                        ? "select"
                                                        : "")
                                          }
                                          onClick={(e) => setOnglet("place")}
                                   >
                                          Places
                                   </div>
                                   <div
                                          className={
                                                 "onglet personnage " +
                                                 (onglet === "personnage"
                                                        ? "select"
                                                        : "")
                                          }
                                          onClick={(e) =>
                                                 setOnglet("personnage")
                                          }
                                   >
                                          Personnages
                                   </div>
                            </div>
                            <table>
                                   <thead>
                                          <tr>
                                                 <th>Name</th>
                                                 <th>Description</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          {Object.keys(list).map(
                                                 (key, index) => {
                                                        let idea = list[index];
                                                        return (
                                                               <Line
                                                                      key={key}
                                                                      idea={
                                                                             idea
                                                                      }
                                                                      type={
                                                                             onglet
                                                                      }
                                                                      setSelected={
                                                                             setSelected
                                                                      }
                                                                      setPopupOpen={
                                                                             setPopupOpen
                                                                      }
                                                                      setRefresh={
                                                                             setRefresh
                                                                      }
                                                               />
                                                        );
                                                 },
                                          )}
                                   </tbody>
                            </table>
                     </div>
              </div>
       );
};

const Line = ({ idea, type, setSelected, setPopupOpen, setRefresh }) => {
       async function deleting(e) {
              e.preventDefault();
              if (
                     window.confirm(
                            "Etes-vous sûr de vouloir supprimer cet élément : " +
                                   idea.name,
                     )
              ) {
                     await deleteItem(type, idea.id);
                     console.log("Bien supprimé");
                     setRefresh((prev) => prev + 1);
              }
       }

       return (
              <tr className={idea.is_active ? "approuved" : "notapprouved"}>
                     <td
                            className="name"
                            onClick={(e) => {
                                   setSelected(idea);
                                   setPopupOpen(true);
                            }}
                     >
                            {idea?.name}
                     </td>
                     <td
                            className="desc"
                            onClick={(e) => {
                                   setSelected(idea);
                                   setPopupOpen(true);
                            }}
                     >
                            {idea?.desc.substr(0, 100)}
                     </td>
                     <td className="deleting" onClick={deleting}>
                            Supprimer
                     </td>
              </tr>
       );
};

export default Admin;
