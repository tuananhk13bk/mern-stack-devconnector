import React from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

const Register = ({
  name,
  email,
  password,
  password2,
  errors,

  changeRegisterInputName,
  changeRegisterInputEmail,
  changeRegisterInputPassword,
  changeRegisterInputPassword2,
  registerUser,

  history
}) => {
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevConnector account</p>
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
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.name
                  })}
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={event =>
                    changeRegisterInputName(event.target.value)
                  }
                />
                {/* IF (errors.name !== undefined) return <div>...</div> */}
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email
                  })}
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={event =>
                    changeRegisterInputEmail(event.target.value)
                  }
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password
                  })}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={event =>
                    changeRegisterInputPassword(event.target.value)
                  }
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password2
                  })}
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={event =>
                    changeRegisterInputPassword2(event.target.value)
                  }
                />
                {errors.password2 && (
                  <div className="invalid-feedback">{errors.password2}</div>
                )}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Register);
