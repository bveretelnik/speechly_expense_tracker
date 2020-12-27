import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import ExpenceState from "./components/context/ExpenseReducer/ExpenceState";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="13f2f9e9-c5e2-4308-a515-e2594879d933" language="en-US">
    <ExpenceState>
      <App />
    </ExpenceState>
  </SpeechProvider>,
  document.getElementById("root")
);
