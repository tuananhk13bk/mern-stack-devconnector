import {
  CHANGE_EDU_INPUT_SCHOOL,
  CHANGE_EDU_INPUT_DEGREE,
  CHANGE_EDU_INPUT_FIELD_OF_STUDY,
  CHANGE_EDU_INPUT_FROM,
  CHANGE_EDU_INPUT_TO,
  CHANGE_EDU_INPUT_CURRENT,
  CHANGE_EDU_INPUT_DESCRIPTION,
  RECEIVE_EDU_ERRORS
} from "../actions/education/educationActionTypes";

const initialState = {
  school: "",
  degree: "",
  fieldOfStudy: "",
  from: "",
  to: "",
  current: false,
  description: "",
  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_EDU_INPUT_SCHOOL:
      return { ...state, school: payload };

    case CHANGE_EDU_INPUT_DEGREE:
      return { ...state, degree: payload };

    case CHANGE_EDU_INPUT_FIELD_OF_STUDY:
      return { ...state, fieldOfStudy: payload };

    case CHANGE_EDU_INPUT_FROM:
      return { ...state, from: payload };

    case CHANGE_EDU_INPUT_TO:
      return { ...state, to: payload };

    case CHANGE_EDU_INPUT_CURRENT:
      return { ...state, current: !state.current };

    case CHANGE_EDU_INPUT_DESCRIPTION:
      return { ...state, description: payload };

    case RECEIVE_EDU_ERRORS:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
