import { combineReducers } from "redux";
import coursesReducer from "./courses/reducers/courseReducer";

const rootReducer = combineReducers({
  courses: coursesReducer
});

export default rootReducer;
