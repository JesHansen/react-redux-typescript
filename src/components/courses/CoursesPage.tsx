import React from "react";
import { RootState, CoursePageProps, TextChangedEvent, SubmitEvent } from "../../types";

class CoursesPage extends React.Component<CoursePageProps, RootState> {
  constructor(props: CoursePageProps) {
    super(props);

    this.state = { course: { title: "" } };
  }

  handleChange = (event: TextChangedEvent) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input type="text" onChange={this.handleChange} value={this.state.course.title} />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
