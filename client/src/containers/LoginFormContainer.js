import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(LoginForm);
