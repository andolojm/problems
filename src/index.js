import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import StateManager from "./state";
import reducer from "./reducer";
import Root from "./Components/Root";
require("./App.css");

let store = createStore(reducer);

store.subscribe(() => {
  StateManager.persistState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
