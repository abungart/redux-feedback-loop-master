import React, { Component } from "react";
import { connect } from "react-redux";

class FeedbackListItem extends Component {
  render() {
    console.log(this.props.feedback);
    let feedbackOut = (
      <li>
        Feeling: {this.props.feedback.feeling}
        <br></br>
        Understanding: {this.props.feedback.understanding}
        <br></br>
        Support: {this.props.feedback.support}
        <br></br>
        Comments: {this.props.feedback.comments}
        <br></br>
      </li>
    );

    return feedbackOut;
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(FeedbackListItem);
