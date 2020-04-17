import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewFeedback extends Component {
  render() {
    return (
      <div>
        <h1>Review Feedback</h1>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(ReviewFeedback);
