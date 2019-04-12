import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeRegisterInputName,
  changeRegisterInputEmail,
  changeRegisterInputPassword,
  changeRegisterInputPassword2,
  receiveError,
  registerUser
} from "../actions/register/registerAction";

import Register from "../components/Auth/Register";

const mapStateToProps = state => {
  const { name, email, password, password2, errors } = state.registerReducer;
  return {
    name,
    email,
    password,
    password2,
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeRegisterInputName,
      changeRegisterInputEmail,
      changeRegisterInputPassword,
      changeRegisterInputPassword2,
      receiveError,
      registerUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
