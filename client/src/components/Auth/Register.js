import { withRouter } from "react-router-dom";
import Input from "../Input";

import React, { Component } from "react";

class Register extends Component {
  componentDidMount() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) history.push("/dashboard");
  }

  inputList = () => {
    const {
      name,
      email,
      password,
      password2,
      errors,

      changeRegisterInputName,
      changeRegisterInputEmail,
      changeRegisterInputPassword,
      changeRegisterInputPassword2
    } = this.props;
    return [
      {
        type: "text",
        error: errors.name,
        placeholder: "Name",
        name: "name",
        value: name,
        onChange: changeRegisterInputName
      },
      {
        type: "email",
        error: errors.email,
        placeholder: "Email",
        name: "email",
        value: email,
        onChange: changeRegisterInputEmail,
        info:
          "This site uses Gravatar so if you want a profile image, use a Gravatar email"
      },
      {
        type: "password",
        error: errors.password,
        placeholder: "Password",
        name: "password",
        value: password,
        onChange: changeRegisterInputPassword
      },
      {
        type: "password",
        error: errors.password2,
        placeholder: "Confirm Password",
        name: "password2",
        value: password2,
        onChange: changeRegisterInputPassword2
      }
    ];
  };

  render() {
    const {
      name,
      email,
      password,
      password2,

      registerUser,

      history
    } = this.props;
    return (
      <div className="register d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-5 offset-md-7">
              <div className="card p-4">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">
                  Create your DevConnector account
                </p>
                <form
                  noValidate
                  onSubmit={event => {
                    event.preventDefault();
                    registerUser(
                      {
                        name,
                        email,
                        password,
                        password2
                      },
                      history
                    );
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
                      info={item.info}
                    />
                  ))}
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
