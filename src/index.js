import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { pokemonReducer } from "./reducers/pokemon";

import "./index.css";
import { logActions, reportError } from "./middlewares";

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logActions, reportError)
);

const store = createStore(pokemonReducer, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
