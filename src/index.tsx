import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";
import StateManager, { StateObject } from "./state";
import appReducer from "./reducer";
import Root from "./Components/Root";
require("./App.css");

const rootReducer = combineReducers<StateObject>({
  app: appReducer,
  form: formReducer
});

let store = createStore(rootReducer);

store.subscribe(() => {
  StateManager.persistState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
