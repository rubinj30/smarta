import { combineReducers } from "redux";

import global from "./Features/Global/globalSlice";

const createRootReducer = () =>
  combineReducers({
    global,
  });

export default createRootReducer;
