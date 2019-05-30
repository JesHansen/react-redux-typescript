import React from "react";
import {
  CoursesPageProps,
  CoursesPageDispatchProps,
  Course,
  TextChangedEvent,
  ClickEvent
} from "../../interfaces";

import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { AppState } from "../../redux";

class CoursesPage extends React.Component<
  CoursesPageProps & CoursesPageDispatchProps,
  Course
> {
  state = {
    title: ""
  };

  handleChange = (event: TextChangedEvent) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event: ClickEvent) => {
    debugger;
    event.preventDefault();
    this.props.createCourse(this.state);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(x => (
          <div key={x.title}>{x.title}</div>
        ))}
      </form>
    );
  }
}

function mapDispatchToProps(dispatch: Function) {
  return {
    createCourse: (course: Course) =>
      dispatch(courseActions.createCourse(course))
  };
}

function mapStateToProps(state: AppState): CoursesPageProps {
  const { courses } = state;
  return { courses };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
