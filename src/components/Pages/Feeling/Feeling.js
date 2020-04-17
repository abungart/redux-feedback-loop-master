import React, { Component } from "react";
import { connect } from "react-redux";

class Feeling extends Component {
  state = {
    feeling: { rating: 0 },
  };

  feelingChange = (event) => {
    this.setState({
      feeling: {
        ...this.state.feeling,
        rating: event.target.value,
      },
    });
  };

  addFeeling = (event) => {
    event.preventDefault();
    // TODO: Dispatch here
    this.props.dispatch({
      type: "ADD_FEELING",
      payload: this.state.feeling,
    });
  };

  render() {
    return (
      <form onSubmit={this.addFeeling}>
        <input
          onChange={this.handlePriceChange}
          type="text"
          placeholder="feeling"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(Feeling);
