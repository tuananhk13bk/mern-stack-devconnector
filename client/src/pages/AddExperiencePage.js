import React from "react";
import { Link } from "react-router-dom";
import AddExperienceContainer from "../containers/AddExperienceContainer";

const AddExperiencePage = () => {
  return (
    <div className="section add-experience py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-outline-dark">
              Go Back
            </Link>
            <AddExperienceContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExperiencePage;
