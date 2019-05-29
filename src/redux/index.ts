import { combineReducers } from "redux";
import courses from "./reducers/courseReducer";

const rootReducer = combineReducers({
  courses
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
