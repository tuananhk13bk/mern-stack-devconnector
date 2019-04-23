import axios from "axios";

import {
  CHANGE_EDU_INPUT_SCHOOL,
  CHANGE_EDU_INPUT_DEGREE,
  CHANGE_EDU_INPUT_FIELD_OF_STUDY,
  CHANGE_EDU_INPUT_FROM,
  CHANGE_EDU_INPUT_TO,
  CHANGE_EDU_INPUT_CURRENT,
  CHANGE_EDU_INPUT_DESCRIPTION,
  RECEIVE_EDU_ERRORS
} from "./educationActionTypes";
import { GET_PROFILE } from "../profile/profileActionTypes";

export const createEdu = (payload, history) => dispatch => {
  axios
    .post("/api/profile/education", payload)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({ type: RECEIVE_EDU_ERRORS, payload: err.response.data })
    );
};

export const deleteEducation = id => dispatch => {
  axios
    .delete(`/api/profile/education/${id}`)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(err =>
      dispatch({ type: RECEIVE_EDU_ERRORS, payload: err.response.data })
    );
};

export const changeEduInputSchool = payload => ({
  type: CHANGE_EDU_INPUT_SCHOOL,
  payload
});

export const changeEduInputDegree = payload => ({
  type: CHANGE_EDU_INPUT_DEGREE,
  payload
});

export const changeEduInputFieldOfStudy = payload => ({
  type: CHANGE_EDU_INPUT_FIELD_OF_STUDY,
  payload
});

export const changeEduInputFrom = payload => ({
  type: CHANGE_EDU_INPUT_FROM,
  payload
});

export const changeEduInputTo = payload => ({
  type: CHANGE_EDU_INPUT_TO,
  payload
});

export const changeEduInputCurrent = payload => ({
  type: CHANGE_EDU_INPUT_CURRENT,
  payload
});

export const changeEduInputDescription = payload => ({
  type: CHANGE_EDU_INPUT_DESCRIPTION,
  payload
});
