import {
  CHANGE_LOGIN_INPUT_EMAIL,
  CHANGE_LOGIN_INPUT_PASSWORD,
  RECEIVE_LOGIN_ERROR,
  SET_CURRENT_USER,
  CLEAR_ALL_LOGIN_STATES
} from "../actions/login/loginActionTypes";
import isEmpty from "../utils/isEmpty";

const initialState = {
  email: "",
  password: "",
  user: {},
  isAuthenticated: false,
  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LOGIN_INPUT_EMAIL:
      return { ...state, email: payload };

    case CHANGE_LOGIN_INPUT_PASSWORD:
      return { ...state, password: payload };

    case SET_CURRENT_USER:
      return { ...state, isAuthenticated: !isEmpty(payload), user: payload };

    case RECEIVE_LOGIN_ERROR:
      return { ...state, errors: payload };

    case CLEAR_ALL_LOGIN_STATES:
      return initialState;

    default:
      return state;
  }
};
