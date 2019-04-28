import React from "react";
import LoginFormContainer from "../containers/LoginFormContainer";

const LoginPage = () => {
  return (
    <div className="login pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto">
            <LoginFormContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
