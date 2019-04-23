import {
  CHANGE_REGISTER_INPUT_NAME,
  CHANGE_REGISTER_INPUT_EMAIL,
  CHANGE_REGISTER_INPUT_PASSWORD,
  CHANGE_REGISTER_INPUT_PASSWORD2,
  RECEIVE_REGISTER_ERROR
} from "../actions/register/registerActionTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
  newUser: {},
  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_REGISTER_INPUT_NAME:
      return { ...state, name: payload };

    case CHANGE_REGISTER_INPUT_EMAIL:
      return { ...state, email: payload };

    case CHANGE_REGISTER_INPUT_PASSWORD:
      return { ...state, password: payload };

    case CHANGE_REGISTER_INPUT_PASSWORD2:
      return { ...state, password2: payload };

    case RECEIVE_REGISTER_ERROR:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
