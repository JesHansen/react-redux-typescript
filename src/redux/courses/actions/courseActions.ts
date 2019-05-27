import { ICourse } from "../../../components/interfaces/CoursesPageInterfaces";
import { CREATE_COURSE, CreateCourseAction } from "../interfaces";

export function createCourse(course: ICourse): CreateCourseAction {
  return { type: CREATE_COURSE, course };
}
