import { ReduxAction, ActionType } from "../../types";

export function createCourse(course: string): ReduxAction<string> {
  return {
    type: ActionType.CREATE_COURSE,
    payload: course,
  };
}
