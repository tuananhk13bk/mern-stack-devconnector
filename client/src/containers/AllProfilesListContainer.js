import { connect } from "react-redux";
import { getAllProfiles } from "../actions/profile/profileActions";
import AllProfilesList from "../components/AllProfiles/AllProfilesList";

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
)(AllProfilesList);
