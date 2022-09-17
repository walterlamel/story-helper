import React, { useEffect, useState } from "react";
import PopupModify from "./components/PopupModify";

const urlApi = process.env.REACT_APP_URL_API;

const Admin = () => {
       const [list, setList] = useState([]);
       const [selected, setSelected] = useState(false);
       const [popupOpen, setPopupOpen] = useState(false);
       const [onglet, setOnglet] = useState("intrigue");
       const [refresh, setRefresh] = useState(1);

       useEffect(() => {
              fetch(urlApi + "admin/" + onglet)
                     .then((res) => res.json())
                     .then(
                            (resultat) => {
                                   console.log(resultat);
                                   setList(resultat);
                            },
                            (error) => {
                                   console.log("Erreur dans la connexion");
                                   console.log(error);
                            },
                     );
       }, [onglet, refresh]);

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
                                                                      setSelected={
                                                                             setSelected
                                                                      }
                                                                      setPopupOpen={
                                                                             setPopupOpen
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

const Line = ({ idea, setSelected, setPopupOpen }) => {
       return (
              <tr
                     className={idea.is_active ? "approuved" : "notapprouved"}
                     onClick={(e) => {
                            setSelected(idea);
                            setPopupOpen(true);
                     }}
              >
                     <td className="name">{idea?.name}</td>
                     <td className="desc">{idea?.desc.substr(0, 100)}</td>
              </tr>
       );
};

export default Admin;
