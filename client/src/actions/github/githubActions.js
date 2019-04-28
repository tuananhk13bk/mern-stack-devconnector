import {
  GET_GITHUB_PROFILE_BY_USERNAME,
  RECEIVE_GITHUB_ERRORS
} from "./githubActionTypes";

export const getGithubProfileByUsername = (
  username,
  count,
  sort,
  clientId,
  clientSecret
) => dispatch => {
  fetch(
    `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({ type: GET_GITHUB_PROFILE_BY_USERNAME, payload: data })
    )
    .catch(err => dispatch({ type: RECEIVE_GITHUB_ERRORS, payload: err }));
};
