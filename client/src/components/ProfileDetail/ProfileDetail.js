import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCredential from "./ProfileCredential";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../Spinner";

class ProfileDetail extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    const { getProfileByUserId, history } = this.props;
    getProfileByUserId(userId, history);
  }

  render() {
    const {
      profile,
      loading,
      clientId,
      clientSecret,
      count,
      sort,
      repos,

      getGithubProfileByUsername
    } = this.props;
    let profileDetail;
    if (profile === null || loading) {
      profileDetail = <Spinner />;
    } else {
      profileDetail = (
        <div>
          <ProfileHeader profile={profile} />
          <ProfileCredential
            education={profile.education}
            experience={profile.experience}
          />
          {profile.github ? (
            <ProfileGithub
              username={profile.github}
              clientId={clientId}
              clientSecret={clientSecret}
              count={count}
              sort={sort}
              repos={repos}
              getGithubProfileByUsername={getGithubProfileByUsername}
            />
          ) : null}
        </div>
      );
    }
    return profileDetail;
  }
}

export default withRouter(ProfileDetail);
