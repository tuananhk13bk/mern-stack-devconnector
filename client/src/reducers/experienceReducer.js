import {
  CHANGE_EXPERIENCE_INPUT_COMPANY,
  CHANGE_EXPERIENCE_INPUT_TITLE,
  CHANGE_EXPERIENCE_INPUT_LOCATION,
  CHANGE_EXPERIENCE_INPUT_FROM,
  CHANGE_EXPERIENCE_INPUT_TO,
  CHANGE_EXPERIENCE_INPUT_CURRENT,
  CHANGE_EXPERIENCE_INPUT_DESCRIPTION,
  RECEIVE_EXPERIENCE_ERRORS
} from "../actions/experience/experienceActionTypes";

const initialState = {
  company: "",
  title: "",
  experienceLocation: "",
  from: "",
  to: "",
  current: false,
  description: "",

  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_EXPERIENCE_INPUT_COMPANY:
      return { ...state, company: payload };

    case CHANGE_EXPERIENCE_INPUT_TITLE:
      return { ...state, title: payload };

    case CHANGE_EXPERIENCE_INPUT_LOCATION:
      return { ...state, experienceLocation: payload };

    case CHANGE_EXPERIENCE_INPUT_FROM:
      return { ...state, from: payload };

    case CHANGE_EXPERIENCE_INPUT_TO:
      return { ...state, to: payload };

    case CHANGE_EXPERIENCE_INPUT_CURRENT:
      return { ...state, current: !state.current };

    case CHANGE_EXPERIENCE_INPUT_DESCRIPTION:
      return { ...state, description: payload };

    case RECEIVE_EXPERIENCE_ERRORS:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
