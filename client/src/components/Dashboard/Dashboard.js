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
      currentUserProfile,
      loading,
      deleteExperience,
      deleteEducation
    } = this.props;
    if (currentUserProfile === null || loading) {
      return <Spinner />;
    }
    // check if logged in user has profile data
    if (Object.keys(currentUserProfile).length > 0) {
      return (
        <div>
          <p className="lead text-muted">
            Welcome{" "}
            <Link to={`/profile/user/${currentUserProfile.user._id}`}>
              {user.name}
            </Link>
          </p>
          <ProfileManagement
            onEditProfileClick={this.onEditProfileClick}
            onDeleteClick={this.onDeleteClick}
          />
          <ExperienceTable
            experience={currentUserProfile.experience}
            deleteExperience={deleteExperience}
          />
          <EducationTable
            education={currentUserProfile.education}
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
    return this.dashboardContent();
  }
}

export default withRouter(Dashboard);
