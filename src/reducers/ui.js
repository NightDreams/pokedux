import { fromJS } from "immutable";
import { SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER } from "../actions/types";

const initialState = fromJS({
  error: "",
  loading: false,
});

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return state.set("error", action.payload.message);
    case CLEAR_ERROR:
      return state.set("error", "");
    case TOGGLE_LOADER:
      return state.set("loading", !state.get("loading"));
    default:
      return state;
  }
};
