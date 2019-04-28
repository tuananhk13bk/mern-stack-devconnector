import React from "react";
import ProfileDetailContainer from "../containers/ProfileDetailContainer";
import { Link } from "react-router-dom";

const ProfileDetailPage = () => {
  return (
    <div className="profileDetail p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <Link
                  to="/all-profiles"
                  className="btn btn-light mb-3 float-left"
                >
                  Back to Profiles
                </Link>
              </div>
              <div className="col-md-6" />
            </div>
            <ProfileDetailContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailPage;
