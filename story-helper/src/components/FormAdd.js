import React, { useEffect, useState } from "react";
import { deleteItem, modifyItem } from "../hooks/api";
import { AnimatePresence, motion } from "framer-motion";

const SPEED_LOADING_SUBMIT = 1000;

const FormAdd = ({ open, setPopupOpen, item = false, reloading = false }) => {
       const [name, setName] = useState("");
       const [desc, setDesc] = useState("");
       const [type, setType] = useState("");

       const [error, setError] = useState("");
       const [isSubmit, setIsSubmit] = useState(false);
       const [loading, setLoading] = useState(false);
       const [inputsError, setInputsError] = useState([]);

       useEffect(() => {
              if (isSubmit) {
                     setName("");
                     setDesc("");
                     setType("");

                     setTimeout(() => {
                            setIsSubmit(false);
                            setPopupOpen(false);
                     }, 5000);

                     if (reloading) {
                            reloading();
                     }
              }
       }, [isSubmit]);

       useEffect(() => {
              if (item) {
                     setName(item.name);
                     setDesc(item.desc);
                     setType(item.type);
              } else {
                     setName("");
                     setDesc("");
                     setType("");
              }
       }, [item]);

       async function handleSubmit(e) {
              e.preventDefault();
              setLoading(true);
              setError("");

              if (item && item.id) {
                     await modifyItem(item, {
                            name: name,
                            desc: desc,
                            typeId: type.id,
                     });
                     setPopupOpen(false);
                     window.location.reload(false);
              } else {
                     const requestOptions = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                   typeId: type.id,
                                   name: name,
                                   desc: desc,
                            }),
                     };

                     fetch(
                            process.env.REACT_APP_URL_API + "create",
                            requestOptions,
                     )
                            .then((response) => response.json())
                            .then(
                                   (data) => {
                                          //console.log(data);
                                          if (data.errors) {
                                                 let inps = [];
                                                 data.errors.forEach((err) => {
                                                        inps.push(
                                                               err.source
                                                                      .pointer,
                                                        );
                                                 });
                                                 setInputsError(inps);

                                                 setError(data.errors[0].title);
                                                 setTimeout(() => {
                                                        setLoading(false);
                                                 }, SPEED_LOADING_SUBMIT);
                                          } else {
                                                 setTimeout(() => {
                                                        setIsSubmit(true);
                                                        setLoading(false);
                                                 }, SPEED_LOADING_SUBMIT);
                                          }
                                   },
                                   (error) => {
                                          setTimeout(() => {
                                                 console.log(error);
                                                 setIsSubmit(false);
                                                 setError(error.message);
                                          }, SPEED_LOADING_SUBMIT);
                                   },
                            );
              }
       }

       async function handleDelete(e) {
              e.preventDefault();
              if (item && item.id) {
                     let accept = window.confirm(
                            "Etes-vous sûr de vouloir supprimer : " + item.name,
                     );
                     if (accept) {
                            await deleteItem(item.id);
                            window.location.reload();
                     }
              }
       }

       return (
              <>
                     {open && (
                            <div
                                   id="container-popup"
                                   className={
                                          "container-popup" +
                                          " " +
                                          (loading ? "loading" : "")
                                   }
                                   onClick={(e) => {
                                          if (
                                                 e.target.id ===
                                                 "container-popup"
                                          ) {
                                                 setPopupOpen(false);
                                          }
                                   }}
                            >
                                   <div className="popup">
                                          <div className="header">
                                                 <div
                                                        className="contain-close"
                                                        onClick={(e) =>
                                                               setPopupOpen(
                                                                      false,
                                                               )
                                                        }
                                                 >
                                                        x
                                                 </div>
                                                 <p>Proposer une idée</p>
                                          </div>

                                          <motion.div
                                                 layout
                                                 className="inside-popup"
                                          >
                                                 {!loading && !isSubmit && (
                                                        <form
                                                               action=""
                                                               onSubmit={(e) =>
                                                                      handleSubmit(
                                                                             e,
                                                                      )
                                                               }
                                                        >
                                                               <label htmlFor="name">
                                                                      <span>
                                                                             Nom
                                                                      </span>
                                                                      <input
                                                                             type="text"
                                                                             name="name"
                                                                             autocomplete="off"
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
                                                                             className={
                                                                                    inputsError.includes(
                                                                                           "name",
                                                                                    )
                                                                                           ? "error"
                                                                                           : ""
                                                                             }
                                                                      />
                                                               </label>
                                                               <label htmlFor="desc">
                                                                      <span>
                                                                             Texte
                                                                      </span>
                                                                      <textarea
                                                                             name="desc"
                                                                             onInput={(
                                                                                    e,
                                                                             ) =>
                                                                                    setDesc(
                                                                                           e
                                                                                                  .target
                                                                                                  .value,
                                                                                    )
                                                                             }
                                                                             value={
                                                                                    desc
                                                                             }
                                                                             className={
                                                                                    inputsError.includes(
                                                                                           "desc",
                                                                                    )
                                                                                           ? "error"
                                                                                           : ""
                                                                             }
                                                                      ></textarea>
                                                               </label>
                                                               <OngletsRatio
                                                                      setType={
                                                                             setType
                                                                      }
                                                                      selectedType={
                                                                             type
                                                                      }
                                                               />
                                                               <p className="message-error">
                                                                      {error}
                                                               </p>
                                                               <input
                                                                      type="submit"
                                                                      value="Proposer"
                                                               />
                                                               {item &&
                                                                      item.id && (
                                                                             <button
                                                                                    onClick={(
                                                                                           e,
                                                                                    ) =>
                                                                                           handleDelete(
                                                                                                  e,
                                                                                           )
                                                                                    }
                                                                             >
                                                                                    Supprimer
                                                                             </button>
                                                                      )}
                                                        </form>
                                                 )}
                                                 {loading && !isSubmit && (
                                                        <FormDuringLoading />
                                                 )}
                                                 {!loading && isSubmit && (
                                                        <FormResponseReceived
                                                               text={error}
                                                        />
                                                 )}
                                          </motion.div>
                                   </div>
                            </div>
                     )}
              </>
       );
};

export default FormAdd;

const OngletsRatio = ({ setType, selectedType }) => {
       const [types, setTypes] = useState([]);

       useEffect(() => {
              fetch(process.env.REACT_APP_URL_API + "type")
                     .then((res) => res.json())
                     .then(
                            (data) => setTypes(data),
                            (err) => console.log(err),
                     );
       }, []);

       return (
              <div className="container-onglets">
                     {types.map((type, key) => (
                            <Onglet
                                   key={key}
                                   setType={setType}
                                   type={type}
                                   selectedType={selectedType}
                            />
                     ))}
              </div>
       );
};

const Onglet = ({ type, setType, selectedType }) => {
       return (
              <div
                     className={
                            "onglet" +
                            " " +
                            type.name +
                            " " +
                            (type.id == selectedType?.id ? "select" : "")
                     }
                     onClick={(e) => setType(type)}
              >
                     {type.visible_name}
              </div>
       );
};

const FormDuringLoading = () => {
       return (
              <div className="wait-response">
                     <div class="lds-ripple">
                            <div></div>
                            <div></div>
                     </div>
              </div>
       );
};

const FormResponseReceived = ({ error }) => {
       useEffect(() => {
              console.log(error);
       }, [error]);

       return (
              <div className="response">
                     Merci pour votre proposition. Elle sera vérifiée avant
                     validation et elle sera bientôt disponible.
              </div>
       );
};
