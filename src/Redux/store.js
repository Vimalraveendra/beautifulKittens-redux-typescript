import rootReducer from "../Redux/rootReducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
