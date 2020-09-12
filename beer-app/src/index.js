import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import { reducer as burgerMenu } from "redux-burger-menu";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./store/reducers/index";
import "./index.css";
import App from "./App";

// const reducers = {
//   dailyBeerReducer,
//   burgerMenu,
// };

// const reducer = combineReducers(reducers);

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
