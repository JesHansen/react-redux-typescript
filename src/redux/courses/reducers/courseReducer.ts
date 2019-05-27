import { CoursesPageState, CourseActions, CREATE_COURSE } from "../interfaces";

const initialState: CoursesPageState = {
  courses: []
};

export default function courseReducer(
  currentState: CoursesPageState = initialState,
  action: CourseActions
): CoursesPageState {
  switch (action.type) {
    case CREATE_COURSE:
      let newState = {
        courses: [...currentState.courses, { ...action.course }]
      };
      return newState;
    default:
      return currentState;
  }
}
