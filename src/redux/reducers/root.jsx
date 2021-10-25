import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";

export const reducer = combineReducers({
    data:apiReducer
})