import { connect } from "react-redux";
import ProfileDetail from "../components/ProfileDetail/ProfileDetail";

import { getProfileByUserId } from "../actions/profile/profileActions";
import { getGithubProfileByUsername } from "../actions/github/githubActions";
const mapStateToProps = state => {
  const { profile, loading } = state.profileReducer;
  const { clientId, clientSecret, count, sort, repos } = state.githubReducer;
  return { profile, loading, clientId, clientSecret, count, sort, repos };
};

const mapDispatchToProps = {
  getProfileByUserId,
  getGithubProfileByUsername
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetail);
