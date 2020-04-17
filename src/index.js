import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// The store is the big JavaScript Object that holds all of the information for our application
const feedbackInstance = createStore(
  combineReducers({
    feedbackReducer,
  })
);

const feedbackReducer = (state, action) => {
  return state;
};

ReactDOM.render(
  <Provider store={feedbackInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
