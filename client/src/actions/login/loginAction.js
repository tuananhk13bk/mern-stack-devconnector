import {
  CHANGE_LOGIN_INPUT_EMAIL,
  CHANGE_LOGIN_INPUT_PASSWORD
} from "./loginActionTypes";

export const changeLoginInputEmail = payload => ({
  type: CHANGE_LOGIN_INPUT_EMAIL,
  payload
});

export const changeLoginInputPassword = payload => ({
  type: CHANGE_LOGIN_INPUT_PASSWORD,
  payload
});
