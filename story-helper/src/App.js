import { useState } from "react";
import BoutonAdd from "./components/BoutonAdd.js";
import Column from "./components/Column.js";
import "./styles/main.scss";
import { PLACE, INTRIGUE, PERSO } from "./data/type";
import FormAdd from "./components/FormAdd.js";
import { useNavigate } from "react-router-dom";

function App() {
       const [PopupOpen, setPopupOpen] = useState(false);
       const navigate = useNavigate();

       return (
              <div className="App">
                     <div className="titles">
                            <img src="/logo.png" alt="StoryHelper" />
                            <div className="ligne"></div>
                            <div className="container-presentation">
                                   <p>
                                          StoryHelper est un petit outil qui va
                                          vous aider à combattre le syndrome de
                                          la page blanche. Utilisez ce sélecteur
                                          aléatoire d'idée pour faire des
                                          associations et créez votre scénario
                                          de JDR
                                   </p>
                            </div>
                     </div>

                     <div className="container-ideas">
                            <Column type={PLACE} />
                            <Column type={PERSO} />
                            <Column type={INTRIGUE} />
                     </div>

                     <BoutonAdd setPopupOpen={setPopupOpen} />

                     <FormAdd open={PopupOpen} setPopupOpen={setPopupOpen} />

                     <footer onClick={(e) => navigate("/admin")}>
                            v1.0 - Kevin Soulhol
                     </footer>

                     <div className="background"></div>
              </div>
       );
}

export default App;
