import React from "react";
import ReactDOM from "react-dom";
import Root from "./Components/Root/Root";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import StateManager from "./state";
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
