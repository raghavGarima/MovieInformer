import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
