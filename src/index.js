import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { pokemonReducer } from "./reducers/pokemon";

import "./index.css";
import { logActions, reportError } from "./middlewares";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancer = composeAlt(
  applyMiddleware(thunk, logActions, reportError)
);

const store = createStore(pokemonReducer, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
