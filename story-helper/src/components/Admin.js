import React, { useState } from "react";
import { modifyItem } from "../hooks/api";
import useGetItemAdmin from "../hooks/useGetItemAdmin";
import useGetTypes from "../hooks/useGetTypes";
import FormAdd from "./FormAdd";
import { motion } from "framer-motion";
import Deconnect from "./Deconnect";
import Footer from "./Footer";

const Admin = () => {
       const [loadApi, setLoadApi] = useState(0);
       const [selectedType, setSelectedType] = useState("");
       const { types } = useGetTypes();
       const { list, setParams } = useGetItemAdmin(selectedType, loadApi);
       const [PopupOpen, setPopupOpen] = useState(false);
       const [selectItem, setSelectItem] = useState(false);

       function handleChangeType(e) {
              setSelectedType(e.target.value);
       }

       function handleChangeActive(e) {
              if (e.target.value !== "") {
                     setParams((prev) => {
                            return { ...prev, is_active: e.target.value };
                     });
              } else {
                     setParams((prev) => {
                            let newo = { ...prev };
                            delete newo.is_active;
                            return newo;
                     });
              }
       }

       function handleChangeAsc(column) {
              setParams((prev) => {
                     return { ...prev, asc: column };
              });
       }

       function reloading() {
              setLoadApi((prev) => prev + 1);
       }

       function handleAddItem(e) {
              e.preventDefault();
              setSelectItem(false);
              setPopupOpen(true);
       }

       return (
              <div className="App">
                     <div className="container-table">
                            <form action="" className="container-filter">
                                   <label htmlFor="types">
                                          Type
                                          <select
                                                 name="type"
                                                 onChange={(e) =>
                                                        handleChangeType(e)
                                                 }
                                          >
                                                 <option value="">Tous</option>
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
                                   <label htmlFor="is_active">
                                          Brouillon
                                          <select
                                                 name="is_active"
                                                 onChange={(e) =>
                                                        handleChangeActive(e)
                                                 }
                                          >
                                                 <option value="">Tous</option>
                                                 <option value="0">
                                                        Brouillon
                                                 </option>
                                                 <option value="1">
                                                        Visible
                                                 </option>
                                          </select>
                                   </label>
                            </form>

                            <table>
                                   <thead>
                                          <tr>
                                                 <td
                                                        onClick={(e) =>
                                                               handleChangeAsc(
                                                                      "name",
                                                               )
                                                        }
                                                 >
                                                        Nom
                                                 </td>
                                                 <td>Type</td>
                                                 <td
                                                        onClick={(e) =>
                                                               handleChangeAsc(
                                                                      "is_active",
                                                               )
                                                        }
                                                 >
                                                        Brouillon
                                                 </td>
                                          </tr>
                                   </thead>
                                   <tbody>
                                          {list.map((item) => (
                                                 <Ligne
                                                        key={item.id}
                                                        item={item}
                                                        reloading={(e) =>
                                                               reloading()
                                                        }
                                                        setPopupOpen={
                                                               setPopupOpen
                                                        }
                                                        selectItem={
                                                               setSelectItem
                                                        }
                                                 />
                                          ))}
                                   </tbody>
                            </table>
                            <button
                                   className="add-btn"
                                   onClick={(e) => {
                                          handleAddItem(e);
                                   }}
                            >
                                   Ajouter un item
                            </button>

                            <Deconnect />
                     </div>

                     <FormAdd
                            open={PopupOpen}
                            setPopupOpen={setPopupOpen}
                            item={selectItem}
                            reloading={reloading}
                     />

                     <Footer />
              </div>
       );
};

export default Admin;

const Ligne = ({ item, reloading, setPopupOpen, selectItem }) => {
       async function updateItem() {
              await modifyItem(item, item);
              reloading();
       }

       function openPopup() {
              selectItem(item);
              setPopupOpen(true);
       }

       return (
              <motion.tr
                     whileHover={{
                            color: "black",
                            background: "white",
                     }}
              >
                     <td className="name-column" onClick={(e) => openPopup()}>
                            {item.name}
                     </td>
                     <td onClick={(e) => openPopup()}>{item?.type?.name}</td>
                     <td className="checkbox-column">
                            <input
                                   type="checkbox"
                                   name="is_active"
                                   checked={item.is_active}
                                   onChange={(e) => {
                                          item.is_active = !item.is_active;
                                          updateItem();
                                   }}
                            />
                     </td>
              </motion.tr>
       );
};
