import { createStore, combineReducers } from "redux";
import firebaseReducer from "./reducers/reducer";

const reducers = combineReducers({
  firebaseReducer,
});

const store = createStore(reducers);
export default store;
