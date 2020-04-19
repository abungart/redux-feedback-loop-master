import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Support extends Component {
  state = {
    feedback: { support: 0 },
  };

  supportChange = (event) => {
    console.log(event.target.value);
    this.setState({
      feedback: {
        ...this.state.feedback,
        support: event.target.value,
      },
    });
  };

  addSupport = (event) => {
    event.preventDefault();
    // TODO: Dispatch here
    this.props.dispatch({
      type: "ADD_FEELING",
      payload: this.state.feedback,
    });
  };

  render() {
    return (
      <div>
        <h2>Support</h2>
        <form onSubmit={this.addSupport}>
          <label for="1">1:</label>
          <input
            type="radio"
            id="1"
            name="support"
            value="1"
            onChange={this.supportChange}
          />
          <label for="2"> 2:</label>
          <input
            type="radio"
            id="2"
            name="support"
            value="2"
            onChange={this.supportChange}
          />
          <label for="3"> 3:</label>
          <input
            type="radio"
            id="3"
            name="support"
            value="3"
            onChange={this.supportChange}
          />
          <label for="4"> 4:</label>
          <input
            type="radio"
            id="4"
            name="support"
            value="4"
            onChange={this.supportChange}
          />
          <label for="5"> 5:</label>
          <input
            type="radio"
            id="5"
            name="support"
            value="5"
            onChange={this.supportChange}
          />

          <button type="submit" value="Submit">
            <Link to="/FeedbackDisplay">Submit</Link>
          </button>
        </form>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Support);
