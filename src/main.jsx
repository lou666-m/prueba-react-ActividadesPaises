import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ActividadContextProvider } from "./context/ActividadContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActividadContextProvider>
      <App />
    </ActividadContextProvider>
  </React.StrictMode>
);
