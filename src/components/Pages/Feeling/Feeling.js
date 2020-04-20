import React, { Component } from "react";
import { connect } from "react-redux";

class Feeling extends Component {
  state = {
    feeling: "",
  };

  feelingChange = (event) => {
    console.log(event.target.value);
    this.setState({
      feedback: {
        ...this.state.feedback,
        feeling: event.target.value,
      },
    });
  };

  addFeeling = (event) => {
    event.preventDefault();
    console.log("addFeeling Running");
    //Dispatch here
    this.props.dispatch({
      type: "ADD_FEELING",
      payload: this.state.feedback,
    });
    this.props.history.push("/Understanding");
  };

  render() {
    return (
      <div>
        <h2>Feeling</h2>
        <form onSubmit={this.addFeeling}>
          <label htmlFor="1">1:</label>
          <input
            type="radio"
            id="1"
            name="feeling"
            value="1"
            onChange={this.feelingChange}
          />
          <label htmlFor="2"> 2:</label>
          <input
            type="radio"
            id="2"
            name="feeling"
            value="2"
            onChange={this.feelingChange}
          />
          <label htmlFor="3"> 3:</label>
          <input
            type="radio"
            id="3"
            name="feeling"
            value="3"
            onChange={this.feelingChange}
          />
          <label htmlFor="4"> 4:</label>
          <input
            type="radio"
            id="4"
            name="feeling"
            value="4"
            onChange={this.feelingChange}
          />
          <label htmlFor="5"> 5:</label>
          <input
            type="radio"
            id="5"
            name="feeling"
            value="5"
            onChange={this.feelingChange}
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

export default connect(putReduxStateOnProps)(Feeling);
