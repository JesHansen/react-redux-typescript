export interface CoursesPageProps {
  courses: Course[];
}

export interface CoursesPageDispatchProps {
  dispatch: Function;
}

export interface Course {
  title: string;
}

export const CREATE_COURSE = "CREATE_COURSE";

interface CreateCourseAction {
  type: typeof CREATE_COURSE;
  course: Course;
}

export type CourseActions = CreateCourseAction;
export type TextChangedEvent = React.ChangeEvent<HTMLInputElement>;
export type ClickEvent = React.FormEvent<HTMLFormElement>;
