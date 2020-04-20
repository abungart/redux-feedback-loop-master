import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  state = {
    comments: "",
  };

  handleCommentChange = (event) => {
    this.setState({
      feedback: {
        ...this.state.feedback,
        comments: event.target.value,
      },
    });
  };

  addComment = (event) => {
    event.preventDefault();
    // Dispatch here
    this.props.dispatch({
      type: "ADD_FEELING",
      payload: this.state.feedback,
    });
    this.props.history.push("/FeedbackDisplay");
  };

  render() {
    return (
      <div>
        <h2>Comments</h2>
        <form onSubmit={this.addComment}>
          <label>Comments: </label>
          <input
            type="text"
            placeholder="Comments, this field is not mandatory"
            onChange={this.handleCommentChange}
          />

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Comments);
