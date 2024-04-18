import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "~/routes/index.jsx";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
