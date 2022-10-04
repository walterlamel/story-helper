import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Admin from "./components/Admin";

const router = createBrowserRouter([
       {
              path: "/",
              element: <App />,
       },
       {
              path: "/admin",
              element: <Admin />,
       },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
       <React.StrictMode>
              <Helmet>
                     <meta charSet="utf-8" />
                     <title>Story Helper</title>
                     <link
                            rel="icon"
                            type="image/png"
                            href="logo_only.png"
                            sizes="16x16"
                     />
              </Helmet>
              <RouterProvider router={router} />
       </React.StrictMode>,
);

reportWebVitals();
