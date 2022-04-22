import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { pokemonReducer } from "./reducers/pokemon";

import "./index.css";

const store = configureStore({
  reducer: pokemonReducer,
  // devTools: true,
});

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
