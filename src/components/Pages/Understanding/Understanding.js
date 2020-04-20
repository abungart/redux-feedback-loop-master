import React, { Component } from "react";
import { connect } from "react-redux";

class Understanding extends Component {
  state = {
    understanding: "",
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
    // Dispatch here
    this.props.dispatch({
      type: "ADD_FEELING",
      payload: this.state.feedback,
    });
    this.props.history.push("/Support");
  };

  render() {
    return (
      <div>
        <h2>Understanding</h2>
        <form onSubmit={this.addUnderstanding}>
          <label htmlFor="1">1:</label>
          <input
            type="radio"
            id="1"
            name="understanding"
            value="1"
            onChange={this.understandingChange}
          />
          <label htmlFor="2"> 2:</label>
          <input
            type="radio"
            id="2"
            name="understanding"
            value="2"
            onChange={this.understandingChange}
          />
          <label htmlFor="3"> 3:</label>
          <input
            type="radio"
            id="3"
            name="understanding"
            value="3"
            onChange={this.understandingChange}
          />
          <label htmlFor="4"> 4:</label>
          <input
            type="radio"
            id="4"
            name="understanding"
            value="4"
            onChange={this.understandingChange}
          />
          <label htmlFor="5"> 5:</label>
          <input
            type="radio"
            id="5"
            name="understanding"
            value="5"
            onChange={this.understandingChange}
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

export default connect(putReduxStateOnProps)(Understanding);
