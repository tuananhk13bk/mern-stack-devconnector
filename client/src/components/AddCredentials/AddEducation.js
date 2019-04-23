import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Input from "../Input";
import TextArea from "../TextArea";

class AddEducation extends Component {
  render() {
    const {
      school,
      degree,
      fieldOfStudy,
      from,
      to,
      current,
      description,
      errors,

      changeEduInputSchool,
      changeEduInputDegree,
      changeEduInputFieldOfStudy,
      changeEduInputFrom,
      changeEduInputTo,
      changeEduInputCurrent,
      changeEduInputDescription,
      createEdu,

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
              <h1 className="display-4 text-center">Add Your Education</h1>
              <p className="lead text-center">
                Add any school, bootcamp, etc that you have attended.
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form
                onSubmit={event => {
                  event.preventDefault();
                  createEdu(
                    {
                      school,
                      degree,
                      fieldOfStudy,
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
                  name="school"
                  placeholder="* School or Bootcamp"
                  value={school}
                  onChange={changeEduInputSchool}
                  error={errors.school}
                />
                <Input
                  name="degree"
                  placeholder="* Degree or Certificate"
                  value={degree}
                  onChange={changeEduInputDegree}
                  error={errors.degree}
                />
                <Input
                  name="fieldOfStudy"
                  placeholder="Field Of Study"
                  value={fieldOfStudy}
                  onChange={changeEduInputFieldOfStudy}
                  error={errors.fieldOfStudy}
                />
                <h6>From Date</h6>
                <Input
                  type="date"
                  name="from"
                  value={from}
                  onChange={changeEduInputFrom}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <Input
                  type="date"
                  name="to"
                  value={to}
                  onChange={changeEduInputTo}
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
                    onChange={() => changeEduInputCurrent()}
                  />
                  <label className="form-check-label" htmlFor="current">
                    Current Job
                  </label>
                </div>
                <TextArea
                  placeholder="Job Description"
                  name="description"
                  value={description}
                  onChange={changeEduInputDescription}
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
export default withRouter(AddEducation);
