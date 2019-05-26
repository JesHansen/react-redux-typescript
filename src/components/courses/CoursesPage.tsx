import React from "react";
import {
  ICoursesPageProps,
  ICoursesPageState
} from "../interfaces/CoursesPageInterfaces";

type TextChangedEvent = React.ChangeEvent<HTMLInputElement>;
type ClickEvent = React.FormEvent<HTMLFormElement>;

class CoursesPage extends React.Component<
  ICoursesPageProps,
  ICoursesPageState
> {
  state: ICoursesPageState = {
    course: {
      title: ""
    }
  };

  handleChange = (event: TextChangedEvent) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event: ClickEvent) => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
