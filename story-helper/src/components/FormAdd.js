import React, { useEffect, useState } from "react";

const FormAdd = ({ open, setPopupOpen }) => {
       const [name, setName] = useState("");
       const [desc, setDesc] = useState("");
       const [type, setType] = useState("");

       const [error, setError] = useState("");
       const [isSubmit, setIsSubmit] = useState(false);
       const [loading, setLoading] = useState(false);
       const [inputsError, setInputsError] = useState([]);

       useEffect(() => {
              if (isSubmit) {
                     setPopupOpen(false);
                     setName("");
                     setDesc("");
                     setType("");
              }
       }, [isSubmit]);

       async function handleSubmit(e) {
              e.preventDefault();
              setLoading(true);
              setError("");

              const requestOptions = {
                     method: "POST",
                     headers: { "Content-Type": "application/json" },
                     body: JSON.stringify({
                            typeId: type.id,
                            name: name,
                            desc: desc,
                     }),
              };

              fetch(process.env.REACT_APP_URL_API + "create", requestOptions)
                     .then((response) => response.json())
                     .then(
                            (data) => {
                                   console.log(data);
                                   if (data.errors) {
                                          let inps = [];
                                          data.errors.forEach((err) => {
                                                 inps.push(err.source.pointer);
                                          });
                                          setInputsError(inps);
                                          console.log(inps);
                                          setError(data.errors[0].title);
                                          setLoading(false);
                                   } else {
                                          setIsSubmit(true);
                                          setLoading(false);
                                   }
                            },
                            (error) => {
                                   console.log(error);
                                   setIsSubmit(false);
                                   setError(error.message);
                            },
                     );
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
                                                 <p>Proposer une idée</p>
                                          </div>

                                          <form
                                                 action=""
                                                 onSubmit={(e) =>
                                                        handleSubmit(e)
                                                 }
                                          >
                                                 <label htmlFor="name">
                                                        <span>Nom</span>
                                                        <input
                                                               type="text"
                                                               name="name"
                                                               onInput={(e) =>
                                                                      setName(
                                                                             e
                                                                                    .target
                                                                                    .value,
                                                                      )
                                                               }
                                                               value={name}
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
                                                        <span>Texte</span>
                                                        <textarea
                                                               name="desc"
                                                               onInput={(e) =>
                                                                      setDesc(
                                                                             e
                                                                                    .target
                                                                                    .value,
                                                                      )
                                                               }
                                                               value={desc}
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
                                                        setType={setType}
                                                        selectedType={type}
                                                 />
                                                 <p className="message-error">
                                                        {error}
                                                 </p>
                                                 <input
                                                        type="submit"
                                                        value="Proposer"
                                                 />
                                          </form>
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
                            (type.id == selectedType.id ? "select" : "")
                     }
                     onClick={(e) => setType(type)}
              >
                     {type.visible_name}
              </div>
       );
};
