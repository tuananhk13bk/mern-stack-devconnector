import { connect } from "react-redux";
import { logoutUser } from "../actions/login/loginActions";
import { clearCurrentProfile } from "../actions/profile/profileActions";
import Navbar from "../components/Layout/Navbar";
const mapStateToProps = state => {
  const { isAuthenticated, user } = state.loginReducer;
  return {
    isAuthenticated,
    user
  };
};

const mapDispatchToProps = {
  logoutUser,
  clearCurrentProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
