import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Feeling from "../Pages/Feeling/Feeling.js";
import FeedbackDisplay from "../Pages/ReviewFeedback/ReviewFeedback.js";

class App extends Component {
  componentDidMount() {
    console.log("Mounted");
    this.getFeedback();
  }

  // API CALLS

  getFeedback() {
    axios({
      method: "GET",
      url: "/feedback",
    })
      .then((response) => {
        console.log("feedback", response);

        this.props.dispatch({
          type: "GET_GALLERY",
          payload: [...response.data],
        });
      })
      .catch((err) => {
        alert("There was an error getting feedback");
      });
  } // end getFeedback Function

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
            <div className="nav">
              <button>
                <Link to="/Feeling">I'm a Student</Link>
              </button>
              <button>
                <Link to="/FeedbackDisplay">I'm an Instructor</Link>
              </button>
            </div>
            <Route exact path="/Feeling" component={Feeling} />
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
