import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import pokemonReducer from "./reducers/pokemon";

import "./index.css";

let store = createStore(
  pokemonReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
