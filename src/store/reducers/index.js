import { combineReducers } from "redux";
import { controlReducer } from "./controlReducer";
import { markerReducer } from "./markerReducer";

export default combineReducers({
  controlReducer,
  markerReducer
});
