import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// The store is the big JavaScript Object that holds all of the information for our application
const feedbackReducer = (state, action) => {
  if (action.type === "GET_GALLERY") {
    return [action.payload];
  }

  return [action.payload];
};

const feedbackInstance = createStore(
  combineReducers({
    feedbackReducer,
  })
);

ReactDOM.render(
  <Provider store={feedbackInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
