import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import FeedbackListItem from "../FeedbackListItem/FeedbackListItem";

class ReviewFeedback extends Component {
  render() {
    const feedbackArray = () => {
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
    }; // end getFeedback Function

    console.log(feedbackArray);
    return (
      <div>
        <h1>Review Feedback</h1>
        <ul>
          {this.props.reduxState.feedbackArrayReducer.map((feedback, i) => {
            return <FeedbackListItem key={i} feedback={feedback} />;
          })}
        </ul>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(ReviewFeedback);
