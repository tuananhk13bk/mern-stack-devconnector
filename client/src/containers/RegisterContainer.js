import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeInputName,
  changeInputEmail,
  changeInputPassword,
  changeInputPassword2,
  receiveError
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
      changeInputName,
      changeInputEmail,
      changeInputPassword,
      changeInputPassword2,
      receiveError
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
