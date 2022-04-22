import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { logActions } from "./middlewares/index";
import { pokemonReducer } from "./reducers/pokemon";

import "./index.css";

const store = configureStore({
  reducer: pokemonReducer,
  middleware: [logActions],
});

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
