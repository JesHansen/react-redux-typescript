import { Course, CREATE_COURSE, CourseActions } from "../../interfaces";

export function createCourse(course: Course): CourseActions {
  return { type: CREATE_COURSE, course };
}
