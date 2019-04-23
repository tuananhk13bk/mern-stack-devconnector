import axios from "axios";

import {
  CHANGE_EXPERIENCE_INPUT_COMPANY,
  CHANGE_EXPERIENCE_INPUT_TITLE,
  CHANGE_EXPERIENCE_INPUT_LOCATION,
  CHANGE_EXPERIENCE_INPUT_FROM,
  CHANGE_EXPERIENCE_INPUT_TO,
  CHANGE_EXPERIENCE_INPUT_CURRENT,
  CHANGE_EXPERIENCE_INPUT_DESCRIPTION,
  RECEIVE_EXPERIENCE_ERRORS
} from "./experienceActionTypes";
import { GET_PROFILE } from "../profile/profileActionTypes";

export const addExperience = (payload, history) => dispatch => {
  axios
    .post("api/profile/experience", payload)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({ type: RECEIVE_EXPERIENCE_ERRORS, payload: err.response.data })
    );
};

export const deleteExperience = payload => dispatch => {
  axios
    .delete(`/api/profile/experience/${payload}`)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(err =>
      dispatch({ type: RECEIVE_EXPERIENCE_ERRORS, payload: err.response.data })
    );
};

export const changeExperienceInputCompany = payload => ({
  type: CHANGE_EXPERIENCE_INPUT_COMPANY,
  payload
});

export const changeExperienceInputTitle = payload => ({
  type: CHANGE_EXPERIENCE_INPUT_TITLE,
  payload
});

export const changeExperienceInputLocation = payload => ({
  type: CHANGE_EXPERIENCE_INPUT_LOCATION,
  payload
});

export const changeExperienceInputFrom = payload => ({
  type: CHANGE_EXPERIENCE_INPUT_FROM,
  payload
});

export const changeExperienceInputTo = payload => ({
  type: CHANGE_EXPERIENCE_INPUT_TO,
  payload
});

export const changeExperienceInputCurrent = payload => ({
  type: CHANGE_EXPERIENCE_INPUT_CURRENT,
  payload
});

export const changeExperienceInputDescription = payload => ({
  type: CHANGE_EXPERIENCE_INPUT_DESCRIPTION,
  payload
});
