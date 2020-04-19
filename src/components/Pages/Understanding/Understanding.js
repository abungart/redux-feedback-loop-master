import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Understanding extends Component {
  state = {
    feedback: { understanding: 0 },
  };

  understandingChange = (event) => {
    console.log(event.target.value);
    this.setState({
      feedback: {
        ...this.state.feedback,
        understanding: event.target.value,
      },
    });
  };

  addUnderstanding = (event) => {
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
        <h2>Understanding</h2>
        <form onSubmit={this.addUnderstanding}>
          <label for="1">1:</label>
          <input
            type="radio"
            id="1"
            name="understanding"
            value="1"
            onChange={this.understandingChange}
          />
          <label for="2"> 2:</label>
          <input
            type="radio"
            id="2"
            name="understanding"
            value="2"
            onChange={this.understandingChange}
          />
          <label for="3"> 3:</label>
          <input
            type="radio"
            id="3"
            name="understanding"
            value="3"
            onChange={this.understandingChange}
          />
          <label for="4"> 4:</label>
          <input
            type="radio"
            id="4"
            name="understanding"
            value="4"
            onChange={this.understandingChange}
          />
          <label for="5"> 5:</label>
          <input
            type="radio"
            id="5"
            name="understanding"
            value="5"
            onChange={this.understandingChange}
          />

          <button type="submit" value="Submit">
            <Link to="/Support">Submit</Link>
          </button>
        </form>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Understanding);
