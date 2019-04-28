import axios from "axios";
import {
  CHANGE_REGISTER_INPUT_NAME,
  CHANGE_REGISTER_INPUT_EMAIL,
  CHANGE_REGISTER_INPUT_PASSWORD,
  CHANGE_REGISTER_INPUT_PASSWORD2,
  RECEIVE_REGISTER_ERROR,
  CLEAR_ALL_REGISTER_STATES
} from "./registerActionTypes";

export const changeRegisterInputName = payload => ({
  type: CHANGE_REGISTER_INPUT_NAME,
  payload
});

export const changeRegisterInputEmail = payload => ({
  type: CHANGE_REGISTER_INPUT_EMAIL,
  payload
});

export const changeRegisterInputPassword = payload => ({
  type: CHANGE_REGISTER_INPUT_PASSWORD,
  payload
});

export const changeRegisterInputPassword2 = payload => ({
  type: CHANGE_REGISTER_INPUT_PASSWORD2,
  payload
});

export const registerUser = (payload, history) => dispatch => {
  axios
    .post("/api/user/register", payload)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: RECEIVE_REGISTER_ERROR,
        payload: err.response.data
      })
    );
};

export const clearAllRegisterStates = () => ({
  type: CLEAR_ALL_REGISTER_STATES
});
