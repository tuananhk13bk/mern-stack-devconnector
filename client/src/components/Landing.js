import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class Landing extends Component {
  componentDidMount() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) history.push("/dashboard");
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay text-light d-flex flex-column justify-content-center">
          <div className="landing-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-right">
                  <h1 className="display-3 mb-4">Developer Connector</h1>
                  <p className="lead">
                    Create a developer profile/portfolio, share posts and get
                    help from other developers
                  </p>
                  <hr />
                  <Link
                    to="/register"
                    className="btn btn-lg btn-outline-success mr-2"
                  >
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-outline-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);
