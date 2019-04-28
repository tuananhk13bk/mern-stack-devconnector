import { withRouter } from "react-router-dom";
import Input from "../Input";

import React, { Component } from "react";

class Login extends Component {
  componentDidMount() {
    // protect login route when logged in
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) history.push("/dashboard");
  }

  render() {
    const {
      email,
      password,
      errors,

      changeLoginInputEmail,
      changeLoginInputPassword,
      loginUser,

      history
    } = this.props;
    return (
      <div className="card">
        <div className="card-body">
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
            <Input
              autoFocus={true}
              type="email"
              error={errors.email}
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={changeLoginInputEmail}
            />
            <Input
              type="password"
              error={errors.password}
              placeholder="Password"
              name="password"
              value={password}
              onChange={changeLoginInputPassword}
            />
            <input
              type="submit"
              value="Login"
              className="btn btn-outline-info btn-block mt-4"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
