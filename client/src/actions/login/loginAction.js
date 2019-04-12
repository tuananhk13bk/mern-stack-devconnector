import { CHANGE_INPUT_EMAIL, CHANGE_INPUT_PASSWORD } from "./loginActionTypes";

export const changeInputEmail = payload => ({
  type: CHANGE_INPUT_EMAIL,
  payload
});

export const changeInputPassword = payload => ({
  type: CHANGE_INPUT_PASSWORD,
  payload
});
