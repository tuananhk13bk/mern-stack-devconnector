import { connect } from "react-redux";
import Profiles from "../components/Profiles/Profiles";

import { getAllProfiles } from "../actions/profile/profileActions";
const mapStateToProps = state => {
  const { allProfiles, loading } = state.profileReducer;
  return { allProfiles, loading };
};

const mapDispatchToProps = {
  getAllProfiles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);
