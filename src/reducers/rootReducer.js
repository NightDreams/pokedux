import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemon";
import { uiReducer } from "./ui";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer,
});
export default rootReducer;
