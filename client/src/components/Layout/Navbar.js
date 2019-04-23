import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navbar = ({
  isAuthenticated,
  user,
  logoutUser,
  clearCurrentProfile,
  history
}) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to=""
          className="nav-link"
          onClick={event => {
            event.preventDefault();
            clearCurrentProfile();
            logoutUser(history);
          }}
        >
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: 25, marginRight: 5 }}
            title="You must have a Gravatar connected to your email to display an image"
          />{" "}
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ml-auto">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DevConnector
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profiles">
                Developers
              </Link>
            </li>
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
