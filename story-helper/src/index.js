import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Admin from "./components/Admin";
import Login from "./pages/Login";
import { useIsConnect } from "./hooks/useIsConnect";

const root = ReactDOM.createRoot(document.getElementById("root"));

const MyRoutes = () => {
       const { isConnect } = useIsConnect();

       return (
              <BrowserRouter>
                     <Routes>
                            <Route exact path="/" element={<App />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                   path="/admin"
                                   element={isConnect ? <Admin /> : <Login />}
                            />
                     </Routes>
              </BrowserRouter>
       );
};

root.render(
       <React.StrictMode>
              <Helmet>
                     <meta charSet="utf-8" />
                     <title>Story Helper</title>
                     <html lang="fr" />
                     <link rel="icon" href="/logo_only.png" />
              </Helmet>
              <MyRoutes />
       </React.StrictMode>,
);

reportWebVitals();
