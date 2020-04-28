import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { KittensActionTypes } from "./Kittens/Kittens.types";

// here we are grabbing all the state types from different reducers.
export type AppState = ReturnType<typeof rootReducer>;
// in store little  bit of alteration is needed  to thunk piece so instead
// of just specifying thunk here, we are going to do thunk as thunkMiddleware
//here type as means new type assertion. thunkMiddleware comes from
// redux-thunk library, this is going to take two parameters , one is the
// AppState and the other one is the App actions in our case it is
// KittensActionTypes

const middlewares = [thunk as ThunkMiddleware<AppState, KittensActionTypes>];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
