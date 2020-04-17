import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Feeling from "../Pages/Feeling/Feeling.js";
import FeedbackDisplay from "../Pages/ReviewFeedback/ReviewFeedback.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
        <Router>
          <div>
            <ul className="nav">
              <li>
                <Link to="/">Leave Feedback</Link>
              </li>
              <li>
                <Link to="/FeedbackDisplay">All Feedback</Link>
              </li>
            </ul>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/FeedbackDisplay" component={FeedbackDisplay} />
          </div>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(App);
