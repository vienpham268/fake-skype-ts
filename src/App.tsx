import React from "react";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createHashHistory";
import { routerMiddleware } from "react-router-redux";

export const App = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, middlewares);

  return <Provider store={store}></Provider>;
};
