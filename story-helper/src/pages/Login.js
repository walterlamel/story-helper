import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
       const navigate = useNavigate();
       const [errorMessage, setErrorMessage] = useState(false);
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");

       const handleSubmit = async (e) => {
              e.preventDefault();

              let data = { email: email, password: password };

              await fetch(process.env.REACT_APP_API_USER + "login", {
                     method: "POST",
                     credentials: "include",
                     headers: {
                            "Content-Type": "application/json",
                     },
                     body: JSON.stringify(data),
              })
                     .then((res) => res.json())
                     .then(
                            (data) => {
                                   //console.log(data);
                                   if (data.code) {
                                          setErrorMessage(data.message);
                                   } else if (data.id) {
                                          window.location.reload();
                                   }
                            },
                            (err) => {
                                   console.log(err);
                                   setErrorMessage(err.message);
                            },
                     );
       };

       return (
              <div className="App login">
                     <form action="" onSubmit={handleSubmit}>
                            <h2>Bonjour.</h2>
                            <p>
                                   Vous essayez d'entrer là où vous n'êtes pas
                                   autorisé.
                            </p>
                            <label htmlFor="email">
                                   <span>Identifiant</span>
                                   <input
                                          type="text"
                                          name="email"
                                          value={email}
                                          onChange={(e) =>
                                                 setEmail(e.target.value)
                                          }
                                   />
                            </label>
                            <label htmlFor="password">
                                   <span>Password</span>
                                   <input
                                          type="password"
                                          name="password"
                                          value={password}
                                          onChange={(e) =>
                                                 setPassword(e.target.value)
                                          }
                                   />
                            </label>
                            <div className="error">{errorMessage}</div>
                            <input type="submit" value="Login" />
                     </form>

                     <Footer />
              </div>
       );
};

export default Login;
