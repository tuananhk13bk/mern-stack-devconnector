import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import experienceReducer from "./experienceReducer";
import educationReducer from "./educationReducer";
import githubReducer from "./githubReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  profileReducer,
  experienceReducer,
  educationReducer,
  githubReducer,
  postReducer
});

export default rootReducer;
