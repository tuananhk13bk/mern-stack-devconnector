import {
  CHANGE_LOGIN_INPUT_EMAIL,
  CHANGE_LOGIN_INPUT_PASSWORD
} from "../actions/login/loginActionTypes";

const initialState = {
  email: "",
  password: "",
  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LOGIN_INPUT_EMAIL:
      return { ...state, email: payload };

    case CHANGE_LOGIN_INPUT_PASSWORD:
      return { ...state, password: payload };

    default:
      return state;
  }
};
