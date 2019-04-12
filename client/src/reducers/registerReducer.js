import {
  CHANGE_INPUT_NAME,
  CHANGE_INPUT_EMAIL,
  CHANGE_INPUT_PASSWORD,
  CHANGE_INPUT_PASSWORD2,
  RECEIVE_ERROR,
  SUBMIT_REGISTER
} from "../actions/register/registerActionTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_INPUT_NAME:
      return { ...state, name: payload.name };

    case CHANGE_INPUT_EMAIL:
      return { ...state, email: payload.email };

    case CHANGE_INPUT_PASSWORD:
      return { ...state, password: payload.password };

    case CHANGE_INPUT_PASSWORD2:
      return { ...state, password2: payload.password2 };

    case RECEIVE_ERROR:
      return { ...state, errors: payload.errors };

    case SUBMIT_REGISTER:
      return { ...state };

    default:
      return state;
  }
};
