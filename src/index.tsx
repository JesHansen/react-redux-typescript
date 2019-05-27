import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { CoursesPageState } from "./redux/courses/interfaces";
import { Provider as ReduxProvider } from "react-redux";

const initialState: CoursesPageState = {
  courses: [{ title: "" }]
};

const store = configureStore({ courses: initialState });

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
