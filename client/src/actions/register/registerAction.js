import {
  CHANGE_INPUT_NAME,
  CHANGE_INPUT_EMAIL,
  CHANGE_INPUT_PASSWORD,
  CHANGE_INPUT_PASSWORD2,
  RECEIVE_ERROR,
  SUBMIT_REGISTER
} from "./registerActionTypes";

export const changeInputName = payload => ({
  type: CHANGE_INPUT_NAME,
  payload
});

export const changeInputEmail = payload => ({
  type: CHANGE_INPUT_EMAIL,
  payload
});

export const changeInputPassword = payload => ({
  type: CHANGE_INPUT_PASSWORD,
  payload
});

export const changeInputPassword2 = payload => ({
  type: CHANGE_INPUT_PASSWORD2,
  payload
});

export const receiveError = payload => ({
  type: RECEIVE_ERROR,
  payload
});

export const submitRegister = payload => ({
  type: SUBMIT_REGISTER,
  payload
});
