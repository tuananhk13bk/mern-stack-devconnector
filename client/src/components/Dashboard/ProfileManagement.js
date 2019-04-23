import React from "react";
import { Link } from "react-router-dom";

const ProfileManagement = ({ onDeleteClick, onEditProfileClick }) => {
  return (
    <div>
      <div className="btn-group mb-4" role="group">
        <button onClick={onEditProfileClick} className="btn btn-light">
          <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
        </button>
        <Link to="/add-experience" className="btn btn-light">
          <i className="fab fa-black-tie text-info mr-1" />
          Add Experience
        </Link>
        <Link to="/add-education" className="btn btn-light">
          <i className="fas fa-graduation-cap text-info mr-1" />
          Add Education
        </Link>
      </div>
      <div style={{ marginBottom: 60 }}>
        <button
          onClick={event => onDeleteClick(event)}
          className="btn btn-danger"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default ProfileManagement;
