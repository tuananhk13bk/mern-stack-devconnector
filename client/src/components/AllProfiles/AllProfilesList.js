import React, { Component } from "react";
import Spinner from "../Spinner";
import ProfileItem from "./ProfileItem";

class AllProfilesList extends Component {
  componentDidMount() {
    this.props.getAllProfiles();
  }

  render() {
    const { allProfiles, loading } = this.props;
    let allProfilesList;
    if (allProfiles === null || loading) {
      allProfilesList = <Spinner />;
    } else {
      if (allProfiles.length > 0) {
        allProfilesList = allProfiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        allProfilesList = <h4>No profiles found...</h4>;
      }
    }
    return allProfilesList;
  }
}

export default AllProfilesList;
