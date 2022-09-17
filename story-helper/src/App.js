import { useState } from "react";
import BoutonAdd from "./components/BoutonAdd.js";
import ContainIdea from "./components/containIdea";
import PopupAdd from "./components/PopupAdd.js";
import "./main.scss";

function App() {
       const [PopupOpen, setPopupOpen] = useState(false);

       return (
              <div className="App">
                     <div className="titles">
                            {/* 
                            <h1>Helper writing</h1>
                            <h2>for roleplaying and scenario</h2>
                                   */}
                     </div>

                     <div className="container-ideas">
                            <ContainIdea type="place" />
                            <ContainIdea type="intrigue" />
                            <ContainIdea type="personnage" />
                     </div>

                     <BoutonAdd setPopupOpen={setPopupOpen} />

                     <PopupAdd open={PopupOpen} setPopupOpen={setPopupOpen} />

                     <footer>v1.0 - Kevin Soulhol</footer>

                     <div className="background"></div>
              </div>
       );
}

export default App;
