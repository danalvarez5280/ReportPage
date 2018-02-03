import { combineReducers } from "redux";
import { selectUser } from "./reducers";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  selectUser
});

export default rootReducer;
