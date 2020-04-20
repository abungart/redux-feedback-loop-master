import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class FeedbackDisplay extends Component {
  submitFeedback = (event) => {
    const feedback = {
      feeling: this.props.store.feedbackReducer.feeling,
      understanding: this.props.store.feedbackReducer.understanding,
      support: this.props.store.feedbackReducer.support,
      comments: this.props.store.feedbackReducer.comments,
    };

    axios
      .post("/feedback", feedback)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  render() {
    console.log(this.props.store.feedbackReducer);
    // let orderTypeElement = (
    //   <div>
    //     <h2>Delivery order for:</h2>
    //   </div>
    // );

    // if (this.props.store.typeReducer === "carryout") {
    //   orderTypeElement = (
    //     <div>
    //       <h2>Pick up order for:</h2>
    //     </div>
    //   );
    // }

    // const pizzaArray = this.props.store.pizzaReducer.map((pizza, index) => {
    //   return (
    //     <li key={index}>
    //       {pizza.size} - {pizza.toppings}
    //     </li>
    //   );
    // });

    return (
      <div>
        <h1>Summary Page</h1>

        <h4>Feeling: {this.props.store.feedbackReducer.feeling}</h4>
        <h4>Understanding: {this.props.store.feedbackReducer.understanding}</h4>
        <h4>Support: {this.props.store.feedbackReducer.support}</h4>
        <h4>Comments: {this.props.store.feedbackReducer.comments}</h4>

        <button onClick={this.submitFeedback}>Submit Feedback</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FeedbackDisplay);
