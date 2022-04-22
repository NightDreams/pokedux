export const logActions = (store) => (next) => (actionInfo) => {
  console.log("🚀 ~ file: index.js ~ line 2 ~ actionInfo", actionInfo);
  next(actionInfo);
};
