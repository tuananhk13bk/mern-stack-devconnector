import React, { Component } from "react";
import Spinner from "../Spinner";

class Profiles extends Component {
  componentDidMount() {
    this.props.getAllProfiles();
  }

  profileContent = () => {
    const { allProfiles, loading } = this.props;
    let profileContent;
    if (allProfiles === null || loading) {
      profileContent = <Spinner />;
    } else {
      if (allProfiles.length > 0) {
        profileContent = <h1>PROFILE HERE</h1>;
      } else {
        profileContent = <h4>No profiles found...</h4>;
      }
    }
    return profileContent;
  };

  render() {
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              {this.profileContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
