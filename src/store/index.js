import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import authReducer from "./reducers/authReducer";
import projectReducer from "./reducers/projectReducer";
import viewDataReducer from "./reducers/viewDataReducer";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
  authReducer,
  projectReducer,
  viewDataReducer,
  userReducer
});
let middleWare = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleWare);
export default store;