import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import foodReducer from "../reducer/foodReducer";

const store = createStore(
  foodReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;