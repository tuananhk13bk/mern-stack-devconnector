import axios from "axios";
import {
  GET_PROFILE_BY,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  CLICK_EDIT_PROFILE,
  CHANGE_PROFILE_HANDLE_INPUT,
  CHANGE_PROFILE_STATUS_SELECT,
  CHANGE_PROFILE_COMPANY_INPUT,
  CHANGE_PROFILE_WEBSITE_INPUT,
  CHANGE_PROFILE_LOCATION_INPUT,
  CHANGE_PROFILE_SKILLS_INPUT,
  CHANGE_PROFILE_GITHUB_INPUT,
  CHANGE_PROFILE_BIO_INPUT,
  CHANGE_PROFILE_TWITTER_INPUT,
  CHANGE_PROFILE_FACEBOOK_INPUT,
  CHANGE_PROFILE_LINKEDIN_INPUT,
  CHANGE_PROFILE_INSTAGRAM_INPUT,
  CHANGE_PROFILE_YOUTUBE_INPUT,
  RECEIVE_PROFILE_ERRORS,
  CLEAR_ALL_PROFILE_STATE,
  GET_ALL_PROFILES,
  GET_CURRENT_USER_PROFILE
} from "./profileActionTypes";
import {
  SET_CURRENT_USER,
  RECEIVE_LOGIN_ERROR
} from "../login/loginActionTypes";

// get all profiles
export const getAllProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/all-profile")
    .then(res => {
      dispatch({ type: GET_ALL_PROFILES, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_PROFILES, payload: null });
    });
};

// get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/")
    .then(res =>
      dispatch({ type: GET_CURRENT_USER_PROFILE, payload: res.data })
    )
    .catch(err => dispatch({ type: GET_CURRENT_USER_PROFILE, payload: {} }));
};

// get profile by handle
export const getProfileByHandle = (handle, history) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res => dispatch({ type: GET_PROFILE_BY, payload: res.data }))
    .catch(err => {
      dispatch({ type: GET_PROFILE_BY, payload: null });
      history.push("/not-found");
    });
};

// get profile by id
export const getProfileByUserId = (userId, history) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/user/${userId}`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_PROFILE_BY, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_PROFILE_BY, payload: null });
      history.push("/not-found");
    });
};

// Create profile
export const createProfile = (payload, history) => dispatch => {
  axios
    .post("/api/profile", payload)
    .then(res => history.push("/dashboard"))
    .catch(err => {
      dispatch({ type: RECEIVE_PROFILE_ERRORS, payload: err.response.data });
    });
};

// Delete account and profile
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete("/api/profile")
      .then(res => dispatch({ type: SET_CURRENT_USER, payload: {} }))
      .catch(err =>
        dispatch({ type: RECEIVE_LOGIN_ERROR, payload: err.response.data })
      );
  }
};

// profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const clickEditProfile = history => dispatch => {
  dispatch({ type: CLICK_EDIT_PROFILE });
  history.push("/edit-profile");
};

// clear profile
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE
});

export const changeProfileHandleInput = payload => ({
  type: CHANGE_PROFILE_HANDLE_INPUT,
  payload
});

export const changeProfileStatusSelect = payload => ({
  type: CHANGE_PROFILE_STATUS_SELECT,
  payload
});

export const changeProfileCompanyInput = payload => ({
  type: CHANGE_PROFILE_COMPANY_INPUT,
  payload
});

export const changeProfileWebisteInput = payload => ({
  type: CHANGE_PROFILE_WEBSITE_INPUT,
  payload
});

export const changeProfileLocationInput = payload => ({
  type: CHANGE_PROFILE_LOCATION_INPUT,
  payload
});

export const changeProfileSkillsInput = payload => ({
  type: CHANGE_PROFILE_SKILLS_INPUT,
  payload
});

export const changeProfileGithubInput = payload => ({
  type: CHANGE_PROFILE_GITHUB_INPUT,
  payload
});

export const changeProfileBioInput = payload => ({
  type: CHANGE_PROFILE_BIO_INPUT,
  payload
});

export const changeProfileTwitterInput = payload => ({
  type: CHANGE_PROFILE_TWITTER_INPUT,
  payload
});

export const changeProfileFacebookInput = payload => ({
  type: CHANGE_PROFILE_FACEBOOK_INPUT,
  payload
});

export const changeProfileLinkedinInput = payload => ({
  type: CHANGE_PROFILE_LINKEDIN_INPUT,
  payload
});

export const changeProfileYoutubeInput = payload => ({
  type: CHANGE_PROFILE_YOUTUBE_INPUT,
  payload
});

export const changeProfileInstagramInput = payload => ({
  type: CHANGE_PROFILE_INSTAGRAM_INPUT,
  payload
});

export const clearAllProfileState = () => ({
  type: CLEAR_ALL_PROFILE_STATE
});
