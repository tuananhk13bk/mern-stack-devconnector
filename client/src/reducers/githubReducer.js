import {
  GET_GITHUB_PROFILE_BY_USERNAME,
  RECEIVE_GITHUB_ERRORS
} from "../actions/github/githubActionTypes";

const initialState = {
  clientId: "5b523ac57946696ceb0b",
  clientSecret: "bf1cc74b65491fb228db675cd22d900167772906",
  count: 5,
  sort: "created: asc",
  repos: [],
  errors: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GITHUB_PROFILE_BY_USERNAME:
      return { ...state, repos: payload };

    case RECEIVE_GITHUB_ERRORS:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
