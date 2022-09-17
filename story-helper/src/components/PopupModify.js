import React, { useEffect, useState } from "react";

import defaultPlace from "../assets/img/default-place.jpg";
import defaultIntrigue from "../assets/img/default-intrigue.jpg";
import defaultPerso from "../assets/img/default-personnage.jpg";

const MaxCaract = 140;

const PopupAdd = ({ open, setPopupOpen, idea, typeDefault, setRefresh }) => {
       const [type, setType] = useState(typeDefault);
       const [name, setName] = useState(idea.name);
       const [desc, setDesc] = useState(idea.desc);
       const [img, setImg] = useState(idea.img);
       const [isActive, setIsActive] = useState(idea.is_active);
       const [caractRestant, setCaractRestant] = useState(MaxCaract);
       const [isSubmit, setIsSubmit] = useState(false);
       const [error, setError] = useState(false);
       const [inputsError, setInputsError] = useState([]);

       useEffect(() => {
              setType(typeDefault);
              setName(idea.name);
              setDesc(idea.desc);
              setImg(idea.img ?? "");
              setIsActive(idea.is_active);
       }, [idea]);

       useEffect(() => {
              setCaractRestant(MaxCaract - desc?.length);
       }, [desc]);

       useEffect(() => {
              setRefresh((prev) => prev + 1);
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

              const requestOptions = {
                     method: "PUT",
                     headers: { "Content-Type": "application/json" },
                     body: JSON.stringify({
                            name: name,
                            desc: desc,
                            img: img,
                            is_active: isActive,
                     }),
              };
              fetch(
                     process.env.REACT_APP_URL_API + type + "/" + idea.id,
                     requestOptions,
              )
                     .then((response) => response.json())
                     .then(
                            (data) => {
                                   console.log(data);

                                   if (data === true || data.res) {
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
                                                 Modifier
                                                 <br />
                                                 cette idée
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
                                                                                           value={
                                                                                                  name
                                                                                           }
                                                                                           onInput={(
                                                                                                  e,
                                                                                           ) =>
                                                                                                  setName(
                                                                                                         e
                                                                                                                .target
                                                                                                                .value,
                                                                                                  )
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
                                                                                           value={
                                                                                                  desc ??
                                                                                                  ""
                                                                                           }
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
                                                                                           value={
                                                                                                  img
                                                                                                         ? img
                                                                                                         : ""
                                                                                           }
                                                                                    />
                                                                             </label>
                                                                      </div>
                                                                      <div className="message-retour">
                                                                             {
                                                                                    error
                                                                             }
                                                                      </div>
                                                                      <div className="contain-btns">
                                                                             <input
                                                                                    className="btn-submit"
                                                                                    type="submit"
                                                                                    value="Modifier"
                                                                             />

                                                                             {isActive ? (
                                                                                    <input
                                                                                           className="btn-submit"
                                                                                           type="submit"
                                                                                           value="Désapprouver"
                                                                                           onClick={(
                                                                                                  e,
                                                                                           ) =>
                                                                                                  setIsActive(
                                                                                                         false,
                                                                                                  )
                                                                                           }
                                                                                    />
                                                                             ) : (
                                                                                    <input
                                                                                           className="btn-submit"
                                                                                           type="submit"
                                                                                           value="Approuver"
                                                                                           onClick={(
                                                                                                  e,
                                                                                           ) =>
                                                                                                  setIsActive(
                                                                                                         true,
                                                                                                  )
                                                                                           }
                                                                                    />
                                                                             )}
                                                                      </div>
                                                               </div>
                                                        </form>
                                                 </>
                                          ) : (
                                                 <div className="response">
                                                        Votre proposition a bien
                                                        été corrigée.
                                                 </div>
                                          )}
                                   </div>
                            </div>
                     )}
              </>
       );
};

export default PopupAdd;
