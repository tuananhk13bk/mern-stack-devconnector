import { connect } from "react-redux";

import {
  changeLoginInputEmail,
  changeLoginInputPassword,
  loginUser
} from "../actions/login/loginActions";

import LoginForm from "../components/Auth/LoginForm";

const mapStateToProps = state => {
  const { email, password, errors, isAuthenticated } = state.loginReducer;
  return {
    email,
    password,
    errors,
    isAuthenticated
  };
};

const mapDispatchToProps = {
  changeLoginInputEmail,
  changeLoginInputPassword,
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
