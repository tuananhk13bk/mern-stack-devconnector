import React from "react";
import { Link } from "react-router-dom";

import AddEducationContainer from "../containers/AddEducationContainer";
const AddEducationPage = () => {
  return (
    <div className="section add-experience py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-outline-dark">
              Go Back
            </Link>
            <AddEducationContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEducationPage;
