import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ExpenceState from "./components/context/ExpenseReducer/ExpenceState";
import "./index.css";

ReactDOM.render(
  <ExpenceState>
    <App />
  </ExpenceState>,
  document.getElementById("root")
);
