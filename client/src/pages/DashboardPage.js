import React from "react";
import DashboardContainer from "../containers/DashboardContainer";

const DashboardPage = () => {
  return (
    <div className="dashboard py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4">Dashboard</h1>
            <DashboardContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
