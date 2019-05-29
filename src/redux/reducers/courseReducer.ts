import { CREATE_COURSE, Course, CourseActions } from "../../interfaces";

const initialState: Course[] = [];

export default function courseReducer(
  currentState: Course[] = initialState,
  action: CourseActions
): Course[] {
  switch (action.type) {
    case CREATE_COURSE:
      let newState: Course[] = [...currentState, action.course];
      return newState;
    default:
      return currentState;
  }
}
