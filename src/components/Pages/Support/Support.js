import React, { Component } from "react";
import { connect } from "react-redux";

class Support extends Component {
  state = {
    support: "",
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
    // Dispatch here
    this.props.dispatch({
      type: "ADD_FEELING",
      payload: this.state.feedback,
    });
    this.props.history.push("/Comments");
  };

  render() {
    return (
      <div>
        <h2>Support</h2>
        <form onSubmit={this.addSupport}>
          <label htmlFor="1">1:</label>
          <input
            type="radio"
            id="1"
            name="support"
            value="1"
            onChange={this.supportChange}
          />
          <label htmlFor="2"> 2:</label>
          <input
            type="radio"
            id="2"
            name="support"
            value="2"
            onChange={this.supportChange}
          />
          <label htmlFor="3"> 3:</label>
          <input
            type="radio"
            id="3"
            name="support"
            value="3"
            onChange={this.supportChange}
          />
          <label htmlFor="4"> 4:</label>
          <input
            type="radio"
            id="4"
            name="support"
            value="4"
            onChange={this.supportChange}
          />
          <label htmlFor="5"> 5:</label>
          <input
            type="radio"
            id="5"
            name="support"
            value="5"
            onChange={this.supportChange}
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

export default connect(putReduxStateOnProps)(Support);
