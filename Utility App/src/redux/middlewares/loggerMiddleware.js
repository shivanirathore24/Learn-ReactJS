export const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      //log actions
      console.log("[LOG]: " + action.type + " " + new Date().toString());

      // call next middleware in pipeline
      const result = next(action);

      // log the modified state of app
      console.log(store.getState());
      return result;
    };
  };
};
