import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/root";
export const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
