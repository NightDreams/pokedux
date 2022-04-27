// import { SET_ERROR } from "../actions/types";

export const logActions = (store) => (next) => (actionInfo) => {
  console.log(
    "🚀 ~ file: index.js ~ line 2 ~ logActions ~ actionInfo",
    actionInfo
  );
  next(actionInfo);
};
export const reportError = (store) => (next) => (actionInfo) => {
  const { action } = actionInfo;

  if (action?.type === "SET_ERROR") {
    console.error(action.payload);
  }

  next(actionInfo);
};
