import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/game";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
