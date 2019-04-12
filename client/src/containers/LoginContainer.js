import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeLoginInputEmail,
  changeLoginInputPassword
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
      changeLoginInputEmail,
      changeLoginInputPassword
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
