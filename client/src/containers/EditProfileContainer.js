import { connect } from "react-redux";
import EditProfile from "../components/Dashboard/EditProfile";
import {
  changeProfileHandleInput,
  changeProfileStatusSelect,
  changeProfileCompanyInput,
  changeProfileWebisteInput,
  changeProfileLocationInput,
  changeProfileSkillsInput,
  changeProfileGithubInput,
  changeProfileBioInput,
  changeProfileTwitterInput,
  changeProfileFacebookInput,
  changeProfileLinkedinInput,
  changeProfileYoutubeInput,
  changeProfileInstagramInput,
  createProfile,
  clearAllProfileState
} from "../actions/profile/profileActions";

const mapStateToProps = state => {
  const {
    editMode,

    handle,
    status,
    company,
    website,
    profileLocation,
    skills,
    github,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    profile,

    errors
  } = state.profileReducer;
  return {
    editMode,

    handle,
    status,
    company,
    website,
    profileLocation,
    skills,
    github,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    profile,

    errors
  };
};

const mapDispatchToProps = {
  changeProfileHandleInput,
  changeProfileStatusSelect,
  changeProfileCompanyInput,
  changeProfileWebisteInput,
  changeProfileLocationInput,
  changeProfileSkillsInput,
  changeProfileGithubInput,
  changeProfileBioInput,
  changeProfileTwitterInput,
  changeProfileFacebookInput,
  changeProfileLinkedinInput,
  changeProfileYoutubeInput,
  changeProfileInstagramInput,
  createProfile,
  clearAllProfileState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
