import { withRouter } from "react-router-dom";
import Input from "../Input";

import React, { Component } from "react";

class Login extends Component {
  componentDidMount() {
    // protect login route when logged in
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) history.push("/dashboard");
  }

  inputList = () => {
    const {
      email,
      password,
      errors,
      changeLoginInputEmail,
      changeLoginInputPassword
    } = this.props;
    return [
      {
        type: "email",
        error: errors.email,
        placeholder: "Email Address",
        name: "email",
        value: email,
        onChange: changeLoginInputEmail
      },
      {
        type: "password",
        error: errors.password,
        placeholder: "Password",
        name: "password",
        value: password,
        onChange: changeLoginInputPassword
      }
    ];
  };

  render() {
    const {
      email,
      password,

      loginUser,

      history
    } = this.props;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form
                noValidate
                onSubmit={event => {
                  event.preventDefault();
                  loginUser({ email, password }, history);
                }}
              >
                {this.inputList().map(item => (
                  <Input
                    key={item.name}
                    type={item.type}
                    error={item.error}
                    placeholder={item.placeholder}
                    name={item.name}
                    value={item.value}
                    onChange={item.onChange}
                  />
                ))}
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
