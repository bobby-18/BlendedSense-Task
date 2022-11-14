import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { BsReducer } from "./reducers/BsRedux";
import createSagaMiddleware from "@redux-saga/core";
import { watchUser } from "./reducers/saga/BsSaga";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleWare = createSagaMiddleware();
export const Store = createStore(
  BsReducer,
  compose(applyMiddleware(sagaMiddleWare), composeWithDevTools())
);

sagaMiddleWare.run(watchUser);
