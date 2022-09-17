import React, { useEffect, useState } from "react";

import defaultPlace from "../assets/img/default-place.jpg";
import defaultIntrigue from "../assets/img/default-intrigue.jpg";
import defaultPerso from "../assets/img/default-personnage.jpg";

const MaxCaract = 140;

const PopupAdd = ({ open, setPopupOpen }) => {
       const [type, setType] = useState("intrigue");
       const [desc, setDesc] = useState("");
       const [caractRestant, setCaractRestant] = useState(MaxCaract);
       const [img, setImg] = useState(false);
       const [isSubmit, setIsSubmit] = useState(false);
       const [error, setError] = useState(false);
       const [inputsError, setInputsError] = useState([]);

       useEffect(() => {
              setCaractRestant(MaxCaract - desc.length);
       }, [desc]);

       useEffect(() => {
              if (isSubmit) {
                     setTimeout(() => {
                            setPopupOpen(false);
                     }, 900);
              }
       }, [isSubmit]);

       function changeType(newtype) {
              setType(newtype);
       }

       function getImageDefault(type) {
              if (img) {
                     return img;
              }

              switch (type) {
                     case "intrigue":
                            return defaultIntrigue;
                     case "place":
                            return defaultPlace;
                     case "personnage":
                            return defaultPerso;
              }
       }

       function handleSubmit(e) {
              e.preventDefault();
              const form = e.target;
              var formData = new FormData(form);

              const requestOptions = {
                     method: "POST",
                     headers: { "Content-Type": "application/json" },
                     body: JSON.stringify({
                            type: type,
                            name: formData.get("name"),
                            desc: desc,
                            img: img,
                     }),
              };
              fetch(process.env.REACT_APP_URL_API + "create", requestOptions)
                     .then((response) => response.json())
                     .then(
                            (data) => {
                                   if (data === 1 || data.res) {
                                          setIsSubmit(true);
                                   } else {
                                          showError(data);
                                   }
                            },
                            (error) => {
                                   setIsSubmit(false);
                                   setError(error.message);
                            },
                     );
       }

       function showError(resError) {
              setIsSubmit(false);
              setError(resError.text);
              setInputsError(resError.input);
              console.log(resError);
       }

       return (
              <>
                     {open && (
                            <div
                                   className="container-popup-add"
                                   onClick={(e) => {
                                          if (
                                                 e.target.className ===
                                                 "container-popup-add"
                                          ) {
                                                 setPopupOpen(false);
                                          }
                                   }}
                            >
                                   <div className="popup-add">
                                          <h5>
                                                 Proposer
                                                 <br />
                                                 une nouvelle idée
                                          </h5>
                                          {!isSubmit ? (
                                                 <>
                                                        <form
                                                               action=""
                                                               onSubmit={
                                                                      handleSubmit
                                                               }
                                                        >
                                                               <div className="contain-img">
                                                                      <img
                                                                             src={getImageDefault(
                                                                                    type,
                                                                             )}
                                                                             alt=""
                                                                      />
                                                               </div>
                                                               <div className="contain-form">
                                                                      <div className="contain-radio">
                                                                             <label
                                                                                    htmlFor="intrigue"
                                                                                    className={
                                                                                           "intrigue " +
                                                                                           (type ===
                                                                                           "intrigue"
                                                                                                  ? "select"
                                                                                                  : "")
                                                                                    }
                                                                                    onClick={(
                                                                                           e,
                                                                                    ) =>
                                                                                           changeType(
                                                                                                  "intrigue",
                                                                                           )
                                                                                    }
                                                                             >
                                                                                    <input
                                                                                           type="radio"
                                                                                           name="intrigue"
                                                                                           id="intrigue"
                                                                                           checked={
                                                                                                  type ===
                                                                                                  "intrigue"
                                                                                           }
                                                                                    />
                                                                                    Intrigue
                                                                             </label>
                                                                             <label
                                                                                    htmlFor="place"
                                                                                    className={
                                                                                           "place " +
                                                                                           (type ===
                                                                                           "place"
                                                                                                  ? "select"
                                                                                                  : "")
                                                                                    }
                                                                                    onClick={(
                                                                                           e,
                                                                                    ) =>
                                                                                           changeType(
                                                                                                  "place",
                                                                                           )
                                                                                    }
                                                                             >
                                                                                    <input
                                                                                           type="radio"
                                                                                           name="place"
                                                                                           id="place"
                                                                                           checked={
                                                                                                  type ===
                                                                                                  "place"
                                                                                           }
                                                                                    />
                                                                                    Place
                                                                             </label>
                                                                             <label
                                                                                    htmlFor="personnage"
                                                                                    className={
                                                                                           "personnage " +
                                                                                           (type ===
                                                                                           "personnage"
                                                                                                  ? "select"
                                                                                                  : "")
                                                                                    }
                                                                                    onClick={(
                                                                                           e,
                                                                                    ) =>
                                                                                           changeType(
                                                                                                  "personnage",
                                                                                           )
                                                                                    }
                                                                             >
                                                                                    <input
                                                                                           type="radio"
                                                                                           name="personnage"
                                                                                           id="personnage"
                                                                                           checked={
                                                                                                  type ===
                                                                                                  "personnage"
                                                                                           }
                                                                                    />
                                                                                    Personnage
                                                                             </label>
                                                                      </div>
                                                                      <div className="contain-contenu">
                                                                             <label htmlFor="name">
                                                                                    <p>
                                                                                           Nom
                                                                                    </p>
                                                                                    <input
                                                                                           type="text"
                                                                                           name="name"
                                                                                           id="name"
                                                                                           className={
                                                                                                  inputsError?.includes(
                                                                                                         "name",
                                                                                                  )
                                                                                                         ? "error"
                                                                                                         : ""
                                                                                           }
                                                                                    />
                                                                             </label>
                                                                             <label
                                                                                    htmlFor="desc"
                                                                                    className="label-desc"
                                                                             >
                                                                                    <p>
                                                                                           Description
                                                                                    </p>
                                                                                    <textarea
                                                                                           name="desc"
                                                                                           id="desc"
                                                                                           className={
                                                                                                  inputsError?.includes(
                                                                                                         "desc",
                                                                                                  )
                                                                                                         ? "error"
                                                                                                         : ""
                                                                                           }
                                                                                           maxLength={
                                                                                                  MaxCaract
                                                                                           }
                                                                                           onInput={(
                                                                                                  e,
                                                                                           ) => {
                                                                                                  if (
                                                                                                         desc.length <=
                                                                                                         MaxCaract
                                                                                                  ) {
                                                                                                         setDesc(
                                                                                                                e
                                                                                                                       .target
                                                                                                                       .value,
                                                                                                         );
                                                                                                  }
                                                                                           }}
                                                                                    ></textarea>
                                                                                    <div className="carac">
                                                                                           {
                                                                                                  caractRestant
                                                                                           }
                                                                                    </div>
                                                                             </label>
                                                                             <label htmlFor="img">
                                                                                    <p>
                                                                                           Url
                                                                                           de
                                                                                           l'image
                                                                                    </p>
                                                                                    <input
                                                                                           type="text"
                                                                                           name="img"
                                                                                           id="img"
                                                                                           onInput={(
                                                                                                  e,
                                                                                           ) =>
                                                                                                  setImg(
                                                                                                         e
                                                                                                                .target
                                                                                                                .value,
                                                                                                  )
                                                                                           }
                                                                                    />
                                                                             </label>
                                                                      </div>
                                                                      <div className="message-retour">
                                                                             {
                                                                                    error
                                                                             }
                                                                      </div>
                                                                      <input
                                                                             className="btn-submit"
                                                                             type="submit"
                                                                             value="Proposer"
                                                                      />
                                                               </div>
                                                        </form>
                                                 </>
                                          ) : (
                                                 <div className="response">
                                                        Votre proposition a bien
                                                        été envoyée.
                                                 </div>
                                          )}
                                   </div>
                            </div>
                     )}
              </>
       );
};

export default PopupAdd;
