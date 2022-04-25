export const logActions = (store) => (next) => (actionInfo) => {
  console.log(
    "🚀 ~ file: index.js ~ line 2 ~ logActions ~ actionInfo",
    actionInfo
  );
  next(actionInfo);
};
