import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProfileGithub extends Component {
  componentDidMount() {
    const {
      username,
      clientId,
      clientSecret,
      count,
      sort,
      getGithubProfileByUsername
    } = this.props;
    getGithubProfileByUsername(username, count, sort, clientId, clientSecret);
  }

  render() {
    const { repos } = this.props;
    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <Link to={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </Link>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success mr-1">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

export default ProfileGithub;
