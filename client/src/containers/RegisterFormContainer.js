import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import {
  changeRegisterInputName,
  changeRegisterInputEmail,
  changeRegisterInputPassword,
  changeRegisterInputPassword2,
  registerUser
} from "../actions/register/registerActions";

import RegisterForm from "../components/Auth/RegisterForm";

const mapStateToProps = state => {
  const { name, email, password, password2, errors } = state.registerReducer;
  const { isAuthenticated } = state.loginReducer;
  return {
    name,
    email,
    password,
    password2,
    errors,
    isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeRegisterInputName,
      changeRegisterInputEmail,
      changeRegisterInputPassword,
      changeRegisterInputPassword2,
      registerUser
    },
    dispatch
  );
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(RegisterForm);
