import { CoursesPageState, CourseActions, CREATE_COURSE } from "../interfaces";

const initialState: CoursesPageState = {
  courses: [{ title: "" }]
};

export default function courseReducer(
  currentState: CoursesPageState = initialState,
  action: CourseActions
): CoursesPageState {
  let theState: CoursesPageState = { courses: [] };
  if (currentState !== undefined && currentState !== null) {
    theState = currentState;
  }
  switch (action.type) {
    case CREATE_COURSE:
      let newState = {
        courses: [...theState.courses, { ...action.course }]
      };
      return newState;
    default:
      return currentState;
  }
}
