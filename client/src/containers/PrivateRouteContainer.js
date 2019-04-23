import { connect } from "react-redux";
import PrivateRoute from "../components/PrivateRoute";

const mapStateToProps = state => ({
  isAuthenticated: state.loginReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
