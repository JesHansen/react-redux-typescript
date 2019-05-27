import { ICourse } from "../../components/interfaces/CoursesPageInterfaces";

export interface CoursesPageState {
  courses: ICourse[];
}

export interface CreateCourseAction {
  type: typeof CREATE_COURSE;
  course: ICourse;
}

export const CREATE_COURSE = "CREATE_COURSE";
export type CourseActions = CreateCourseAction;
