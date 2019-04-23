import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Input from "../Input";
import TextArea from "../TextArea";

class AddExperience extends Component {
  render() {
    const {
      company,
      title,
      experienceLocation,
      from,
      to,
      current,
      description,
      errors,

      changeExperienceInputCompany,
      changeExperienceInputTitle,
      changeExperienceInputLocation,
      changeExperienceInputFrom,
      changeExperienceInputTo,
      changeExperienceInputCurrent,
      changeExperienceInputDescription,
      addExperience,

      history
    } = this.props;
    return (
      <div className="section add-experience py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-outline-dark">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Your Experience</h1>
              <p className="lead text-center">
                Add any developer/programming positions that you have had in the
                past
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form
                onSubmit={event => {
                  event.preventDefault();
                  addExperience(
                    {
                      company,
                      title,
                      experienceLocation,
                      from,
                      to,
                      current,
                      description
                    },
                    history
                  );
                }}
              >
                <Input
                  name="title"
                  placeholder="* Job Title"
                  value={title}
                  onChange={changeExperienceInputTitle}
                  error={errors.title}
                />
                <Input
                  name="company"
                  placeholder="* Company"
                  value={company}
                  onChange={changeExperienceInputCompany}
                  error={errors.company}
                />
                <Input
                  name="location"
                  placeholder="Location"
                  value={experienceLocation}
                  onChange={changeExperienceInputLocation}
                />
                <h6>From Date</h6>
                <Input
                  type="date"
                  name="from"
                  value={from}
                  onChange={changeExperienceInputFrom}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <Input
                  type="date"
                  name="to"
                  value={to}
                  onChange={changeExperienceInputTo}
                  disabled={current ? "disabled" : ""}
                />
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="current"
                    checked={current}
                    value={current}
                    id="current"
                    onChange={() => changeExperienceInputCurrent()}
                  />
                  <label className="form-check-label" htmlFor="current">
                    Current Job
                  </label>
                </div>
                <TextArea
                  placeholder="Job Description"
                  name="description"
                  value={description}
                  onChange={changeExperienceInputDescription}
                  info="Some of your responsabilities, etc"
                />
                <input
                  type="submit"
                  className="btn btn-outline-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AddExperience);
