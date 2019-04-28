import React, { Component } from "react";
import AllProfilesListContainer from "../containers/AllProfilesListContainer";

const AllProfilesPage = () => {
  return (
    <div className="profiles pt-3 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="m-0 display-4 text-center">Developer Profiles</h1>
            <p className="lead text-center">
              Browse and connect with developers
            </p>
            <AllProfilesListContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProfilesPage;
