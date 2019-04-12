import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeInputEmail,
  changeInputPassword
} from "../actions/login/loginAction";

import Login from "../components/Auth/Login";

const mapStateToProps = state => {
  const { email, password } = state.loginReducer;
  return {
    email,
    password
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeInputEmail,
      changeInputPassword
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
