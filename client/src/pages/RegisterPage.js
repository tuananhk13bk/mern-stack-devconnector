import React from "react";
import RegisterFormContainer from "../containers/RegisterFormContainer";

const RegisterPage = () => {
  return (
    <div className="register d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-7">
            <RegisterFormContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
