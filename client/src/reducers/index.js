import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import experienceReducer from "./experienceReducer";
import educationReducer from "./educationReducer";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  profileReducer,
  experienceReducer,
  educationReducer
});

export default rootReducer;
