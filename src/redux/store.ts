import { createStore } from "redux";
import { initialState } from "./initialState";
import {matrixSlice} from "./slice";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";

export const store = createStore(
  matrixSlice.reducer,
  initialState,
  composeWithDevToolsDevelopmentOnly()
);

export default store