import {
  CHANGE_INPUT_EMAIL,
  CHANGE_INPUT_PASSWORD
} from "../actions/login/loginActionTypes";

const initialState = {
  email: "",
  password: "",
  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_INPUT_EMAIL:
      return { ...state, email: payload.email };

    case CHANGE_INPUT_PASSWORD:
      return { ...state, password: payload.password };

    default:
      return state;
  }
};
