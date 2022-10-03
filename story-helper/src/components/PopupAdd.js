import React, { useEffect, useState } from "react";

import defaultPlace from "../assets/img/default-place.jpg";
import defaultIntrigue from "../assets/img/default-intrigue.jpg";
import defaultPerso from "../assets/img/default-personnage.jpg";
import useGetTypes from "../hooks/useGetTypes";

const MaxCaract = 400;
const texts = {
       creater: {
              titre: "Proposer une nouvelle idée",
              bouton: "Proposer",
              successresponse: "Votre proposition a bien été envoyée.",
       },
       modifier: {
              titre: "Modifier cette idée",
              bouton: "Modifier",
              successresponse: "Votre proposition a bien été corrigée.",
       },
};

const PopupAdd = ({
       modifier = false,
       currentIdea = false,
       open,
       setPopupOpen,
       setRefresh,
}) => {
       const [type, setType] = useState("intrigue");
       const [name, setName] = useState("");
       const [desc, setDesc] = useState("");
       const [img, setImg] = useState(false);
       const [is_active, setIsActive] = useState(false);
       const [caractRestant, setCaractRestant] = useState(MaxCaract);
       const [isSubmit, setIsSubmit] = useState(false);
       const [error, setError] = useState(false);
       const [inputsError, setInputsError] = useState([]);

       useEffect(() => {
              if (currentIdea) {
                     setType(currentIdea.type.name ?? "");
                     setName(currentIdea.name ?? "");
                     setDesc(currentIdea.desc ?? "");
                     setImg(currentIdea.img ?? "");
                     setInputsError([]);
                     setError(false);
                     setIsSubmit(false);
              }
       }, [currentIdea]);

       useEffect(() => {
              setCaractRestant(MaxCaract - desc.length);
       }, [desc]);

       useEffect(() => {
              if (isSubmit) {
                     setTimeout(() => {
                            setPopupOpen(false);
                            setIsSubmit(false);
                            setCaractRestant(MaxCaract);
                            setInputsError([]);
                            setError(false);
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

       async function handleSubmit(e) {
              console.log(e.nativeEvent.submitter);
              e.preventDefault();
              //si pour modifier, on change l'url
              let url = !modifier
                     ? process.env.REACT_APP_URL_API + "create"
                     : process.env.REACT_APP_URL_API + currentIdea.id;
              const form = e.target;
              var formData = new FormData(form);

              //on prepare les éléments à envoyer
              const requestOptions = {
                     method: !modifier ? "POST" : "PUT",
                     headers: { "Content-Type": "application/json" },
                     body: JSON.stringify({
                            typeId: formData.get("type"),
                            name: formData.get("name"),
                            desc: desc,
                            img: img,
                            is_active: is_active,
                     }),
              };

              //on envoie
              fetch(url, requestOptions)
                     .then((response) => response.json())
                     .then(
                            (data) => {
                                   //console.log(data);
                                   if (data.errors) {
                                          let inps = [];
                                          data.errors.forEach((err) => {
                                                 inps.push(err.source.pointer);
                                          });
                                          setInputsError(inps);
                                          setError(data.errors[0].title);
                                   } else {
                                          setIsSubmit(true);
                                          setRefresh((prev) => prev + 1);
                                   }
                            },
                            (error) => {
                                   console.log(error);
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

       async function getFakeName() {
              const requestOptions = {
                     method: "GET",
                     headers: {
                            "Content-Type": "application/json",
                     },
              };

              return await fetch(
                     process.env.REACT_APP_URL_FAKENAME,
                     requestOptions,
              )
                     .then((res) => res.json())
                     .then(
                            (data) => {
                                   console.log(data);
                            },
                            (error) => {
                                   console.log(error);
                            },
                     );
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
                                          <div
                                                 className="btn-close"
                                                 onClick={(e) =>
                                                        setPopupOpen(false)
                                                 }
                                          >
                                                 x
                                          </div>
                                          <h5>
                                                 {!modifier
                                                        ? texts.creater.titre
                                                        : texts.modifier.titre}
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
                                                                      <Onglets
                                                                             changeType={
                                                                                    changeType
                                                                             }
                                                                             currentType={
                                                                                    type
                                                                             }
                                                                      />
                                                                      <div className="contain-contenu">
                                                                             <label htmlFor="name">
                                                                                    <p
                                                                                           onClick={(
                                                                                                  e,
                                                                                           ) =>
                                                                                                  getFakeName()
                                                                                           }
                                                                                    >
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
                                                                                           onInput={(
                                                                                                  e,
                                                                                           ) =>
                                                                                                  setName(
                                                                                                         e
                                                                                                                .target
                                                                                                                .value,
                                                                                                  )
                                                                                           }
                                                                                           value={
                                                                                                  name
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
                                                                                                  desc
                                                                                           }
                                                                                    >
                                                                                           {
                                                                                                  desc
                                                                                           }
                                                                                    </textarea>
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
                                                                                    value={
                                                                                           !modifier
                                                                                                  ? texts
                                                                                                           .creater
                                                                                                           .bouton
                                                                                                  : texts
                                                                                                           .modifier
                                                                                                           .bouton
                                                                                    }
                                                                             />

                                                                             {modifier && (
                                                                                    <>
                                                                                           {is_active ? (
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
                                                                                    </>
                                                                             )}
                                                                      </div>
                                                               </div>
                                                        </form>
                                                 </>
                                          ) : (
                                                 <div className="response">
                                                        {!modifier
                                                               ? texts.creater
                                                                        .successresponse
                                                               : texts.modifier
                                                                        .successresponse}
                                                 </div>
                                          )}
                                   </div>
                            </div>
                     )}
              </>
       );
};

export default PopupAdd;

const Onglets = ({ changeType, currentType }) => {
       const { types } = useGetTypes();

       return (
              <div className="contain-radio">
                     {types?.map((type, key) => (
                            <OngletType
                                   key={key}
                                   type={type}
                                   changeType={changeType}
                                   currentType={currentType}
                            />
                     ))}
              </div>
       );
};

const OngletType = ({ type, currentType, changeType }) => {
       return (
              <label
                     htmlFor={type.name}
                     className={
                            type.name +
                            (currentType === type.name ? " select" : "")
                     }
                     onClick={(e) => changeType(type.name)}
              >
                     <input
                            type="radio"
                            name="type"
                            id={type.name}
                            checked={currentType === type.name}
                            value={type.id}
                            onChange={(e) => changeType(type.name)}
                     />
                     {type.visible_name}
              </label>
       );
};
