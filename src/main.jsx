import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Store } from "./components/Store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>
);
