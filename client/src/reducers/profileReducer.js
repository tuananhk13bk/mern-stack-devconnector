import {
  GET_ALL_PROFILES,
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
  CHANGE_PROFILE_YOUTUBE_INPUT,
  CHANGE_PROFILE_INSTAGRAM_INPUT,
  RECEIVE_PROFILE_ERRORS,
  CLEAR_ALL_PROFILE_STATE,
  GET_CURRENT_USER_PROFILE
} from "../actions/profile/profileActionTypes";

const initialState = {
  editMode: false,
  currentUserProfile: null,
  profile: null,
  allProfiles: null,
  loading: false,
  handle: "",
  status: "",
  company: "",
  website: "",
  profileLocation: "",
  skills: "",
  github: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",

  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_LOADING:
      return { ...state, loading: true };

    case GET_ALL_PROFILES:
      return { ...state, allProfiles: payload, loading: false };

    case GET_CURRENT_USER_PROFILE:
      return { ...state, currentUserProfile: payload, loading: false };

    case GET_PROFILE_BY:
      return { ...state, profile: payload, loading: false };

    case CLEAR_CURRENT_PROFILE:
      return { ...state, profile: null };

    case CLICK_EDIT_PROFILE:
      const {
        handle,
        status,
        company,
        website,
        profileLocation,
        skills,
        github,
        bio
      } = state.profile;
      const {
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
      } = state.profile.social;
      // convert from array back to string
      // because state is read-only, we must copy it use spread operator
      const stringSkills = [...skills].join(", ");
      return {
        ...state,

        editMode: true,

        handle,
        status,
        company,
        website,
        profileLocation,
        skills: stringSkills,
        github,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
      };

    case CHANGE_PROFILE_HANDLE_INPUT:
      return { ...state, handle: payload };

    case CHANGE_PROFILE_STATUS_SELECT:
      return { ...state, status: payload };

    case CHANGE_PROFILE_COMPANY_INPUT:
      return { ...state, company: payload };

    case CHANGE_PROFILE_WEBSITE_INPUT:
      return { ...state, website: payload };

    case CHANGE_PROFILE_LOCATION_INPUT:
      return { ...state, profileLocation: payload };

    case CHANGE_PROFILE_SKILLS_INPUT:
      return { ...state, skills: payload };

    case CHANGE_PROFILE_GITHUB_INPUT:
      return { ...state, github: payload };

    case CHANGE_PROFILE_BIO_INPUT:
      return { ...state, bio: payload };

    case CHANGE_PROFILE_TWITTER_INPUT:
      return { ...state, twitter: payload };

    case CHANGE_PROFILE_FACEBOOK_INPUT:
      return { ...state, facebook: payload };

    case CHANGE_PROFILE_LINKEDIN_INPUT:
      return { ...state, linkedin: payload };

    case CHANGE_PROFILE_YOUTUBE_INPUT:
      return { ...state, youtube: payload };

    case CHANGE_PROFILE_INSTAGRAM_INPUT:
      return { ...state, instagram: payload };

    case RECEIVE_PROFILE_ERRORS:
      return { ...state, errors: payload };

    case CLEAR_ALL_PROFILE_STATE:
      return initialState;

    default:
      return state;
  }
};
