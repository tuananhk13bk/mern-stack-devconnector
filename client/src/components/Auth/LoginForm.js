import React from "react";
import AuthForm from "./AuthForm";

const LoginForm = ({
  isAuthenticated,
  email,
  password,
  errors,

  changeLoginInputEmail,
  changeLoginInputPassword,
  loginUser,

  history
}) => {
  const inputsList = [
    {
      autoFocus: true,
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
  return (
    <AuthForm
      title="Log In"
      description="Sign in to your DevConnector account"
      isAuthenticated={isAuthenticated}
      inputsList={inputsList}
      buttonLabel="Login"
      history={history}
      handleOnSubmit={loginUser}
    />
  );
};

export default LoginForm;
