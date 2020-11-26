import React from "react";
import ReactDOM from "react-dom";
import "./Styles/app.scss";
import App from "./App";
import "react-calendar/dist/Calendar.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
