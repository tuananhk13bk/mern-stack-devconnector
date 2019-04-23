import React, { Component } from "react";
import Moment from "react-moment";

class EducationTable extends Component {
  educationTable = () =>
    this.props.education.map(item => (
      <tr key={item._id}>
        <td>{item.school}</td>
        <td>{item.degree}</td>
        <td>
          <Moment format="YYYY/MM/DD">{item.from}</Moment>
          {" - "}
          {item.to ? <Moment format="YYYY/MM/DD">{item.to}</Moment> : "Now"}
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteEducation(item._id)}
          >
            Delete Education
          </button>
        </td>
      </tr>
    ));

  render() {
    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.educationTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default EducationTable;
