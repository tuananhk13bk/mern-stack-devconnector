import { connect } from "react-redux";
import Landing from "../components/Layout/Landing";

const mapStateToProps = state => {
  const { isAuthenticated } = state.loginReducer;
  return {
    isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(Landing);
