import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./Admin";

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
              <RouterProvider router={router} />
       </React.StrictMode>,
);

reportWebVitals();
