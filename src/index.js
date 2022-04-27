import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import { logActions, reportError } from "./middlewares";
import rootReducer from "./reducers/rootReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancer = composeAlt(
  applyMiddleware(thunk, logActions, reportError)
);

const store = createStore(rootReducer, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
