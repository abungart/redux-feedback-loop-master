import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// The store is the big JavaScript Object that holds all of the information for our application
const feedbackReducer = (
  state = { feeling: "", understanding: "", support: "", comments: "" },
  action
) => {
  if (action.type === "ADD_FEELING") {
    console.log(action.payload);
    return { ...state, ...action.payload };
  }
  return [state];
};

const feedbackArrayReducer = (state = [], action) => {
  if (action.type === "GET_GALLERY") {
    console.log(action.payload);
    return [...action.payload];
  }
  return [state];
};

const feedbackInstance = createStore(
  combineReducers({
    feedbackReducer,
    feedbackArrayReducer,
  })
);

ReactDOM.render(
  <Provider store={feedbackInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
