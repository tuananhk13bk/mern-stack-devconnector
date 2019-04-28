import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";
import {
  getCurrentProfile,
  deleteAccount,
  clickEditProfile
} from "../actions/profile/profileActions";
import { deleteExperience } from "../actions/experience/experienceActions";
import { deleteEducation } from "../actions/education/educationActions";

const mapStateToProps = state => {
  const { editMode, currentUserProfile, loading } = state.profileReducer;
  const { user } = state.loginReducer;
  return {
    editMode,
    currentUserProfile,
    loading,
    user
  };
};

const mapDispatchToProps = {
  getCurrentProfile,
  deleteAccount,
  clickEditProfile,
  deleteExperience,
  deleteEducation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
