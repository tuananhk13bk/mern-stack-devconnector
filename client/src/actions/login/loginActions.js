import {
  CHANGE_LOGIN_INPUT_EMAIL,
  CHANGE_LOGIN_INPUT_PASSWORD,
  RECEIVE_LOGIN_ERROR,
  SET_CURRENT_USER,
  CLEAR_ALL_LOGIN_STATES
} from "./loginActionTypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const changeLoginInputEmail = payload => ({
  type: CHANGE_LOGIN_INPUT_EMAIL,
  payload
});

export const changeLoginInputPassword = payload => ({
  type: CHANGE_LOGIN_INPUT_PASSWORD,
  payload
});

// Login - Get User token
export const loginUser = (payload, history) => dispatch => {
  dispatch(clearAllLoginStates());
  axios
    .post("/api/user/login", payload)
    .then(res => {
      // save to local storage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // set token to Auth header
      setAuthToken(token);
      // decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
      history.push("/dashboard");
    })
    .catch(err =>
      dispatch({
        type: RECEIVE_LOGIN_ERROR,
        payload: err.response.data
      })
    );
};

// set logged user
export const setCurrentUser = payload => ({
  type: SET_CURRENT_USER,
  payload
});

// log user out
export const logoutUser = history => dispatch => {
  // remove token from local storage
  localStorage.removeItem("jwtToken");
  // remove the auth header for future requests
  setAuthToken(false);
  // set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // back to home page
  if (history) history.push("/");
};

export const clearAllLoginStates = () => ({
  type: CLEAR_ALL_LOGIN_STATES
});
