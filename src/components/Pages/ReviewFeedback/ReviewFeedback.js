// import React, { Component } from "react";
// import { connect } from "react-redux";

// import FeedbackListItem from "../FeedbackListItem/FeedbackListItem";

// class ReviewFeedback extends Component {
//   render() {
//     console.log(this.props.reduxState.feedbackReducer);
//     return (
//       <div>
//         <h1>Review Feedback</h1>
//         <ul>
//           {this.props.reduxState.feedbackReducer.map((feedback, i) => {
//             return <FeedbackListItem key={i} feedback={feedback} />;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// const putReduxStateOnProps = (reduxState) => ({
//   reduxState,
// });

// export default connect(putReduxStateOnProps)(ReviewFeedback);
