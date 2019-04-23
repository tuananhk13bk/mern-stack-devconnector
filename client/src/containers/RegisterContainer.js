import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeRegisterInputName,
  changeRegisterInputEmail,
  changeRegisterInputPassword,
  changeRegisterInputPassword2,
  registerUser
} from "../actions/register/registerActions";

import Register from "../components/Auth/Register";

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
