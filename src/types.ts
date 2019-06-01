export type RootState = { course: { title: string } };
export type CoursePageProps = { course: { title: string } };
export type TextChangedEvent = React.ChangeEvent<HTMLInputElement>;
export type SubmitEvent = React.FormEvent<HTMLFormElement>;

export enum ActionType {
  CREATE_COURSE,
}
export type ReduxAction<T> = {
  type: ActionType;
  payload: T;
};
