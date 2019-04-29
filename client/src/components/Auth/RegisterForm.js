import React from "react";
import AuthForm from "./AuthForm";

const RegisterForm = ({
  isAuthenticated,
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
  const inputsList = [
    {
      autoFocus: true,
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
  return (
    <AuthForm
      title="Sign Up"
      description="Create your DevConnector account"
      isAuthenticated={isAuthenticated}
      inputsList={inputsList}
      buttonLabel="Register"
      history={history}
      handleOnSubmit={registerUser}
    />
  );
};

export default RegisterForm;
