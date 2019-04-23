import React, { Component } from "react";
import Spinner from "../Spinner";
import { Link, withRouter } from "react-router-dom";

import ProfileManagement from "./ProfileManagement";
import ExperienceTable from "./ExperienceTable";
import EducationTable from "./EducationTable";

class Dashboard extends Component {
  componentDidMount() {
    const { getCurrentProfile } = this.props;
    getCurrentProfile();
  }

  onDeleteClick = event => {
    const { deleteAccount } = this.props;
    event.preventDefault();
    deleteAccount();
  };

  onEditProfileClick = () => {
    const { clickEditProfile, history } = this.props;
    clickEditProfile(history);
  };

  dashboardContent = () => {
    const {
      user,
      profile,
      loading,
      deleteExperience,
      deleteEducation
    } = this.props;
    if (profile === null || loading) {
      return <Spinner />;
    }
    // check if logged in user has profile data
    if (Object.keys(profile).length > 0) {
      return (
        <div>
          <p className="lead text-muted">
            Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
          </p>
          <ProfileManagement
            onEditProfileClick={this.onEditProfileClick}
            onDeleteClick={this.onDeleteClick}
          />
          <ExperienceTable
            experience={profile.experience}
            deleteExperience={deleteExperience}
          />
          <EducationTable
            education={profile.education}
            deleteEducation={deleteEducation}
          />
          {/* TODO: add exp and edu */}
        </div>
      );
    }
    // user is logged in but has no profile
    return (
      <div>
        <p className="lead text-muted">Welcome {user.name}</p>
        <p>You have not yet setup a profile, please add some info</p>
        <Link to="/create-profile" className="btn btn-lg btn-info">
          Create Profile
        </Link>
      </div>
    );
  };

  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {this.dashboardContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
