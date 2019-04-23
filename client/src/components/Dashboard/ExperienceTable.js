import React, { Component } from "react";
import Moment from "react-moment";

class ExperienceTable extends Component {
  experienceTable = () =>
    this.props.experience.map(item => (
      <tr key={item._id}>
        <td>{item.company}</td>
        <td>{item.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{item.from}</Moment>
          {" - "}
          {item.to ? <Moment format="YYYY/MM/DD">{item.to}</Moment> : "Now"}
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteExperience(item._id)}
          >
            Delete Experience
          </button>
        </td>
      </tr>
    ));

  render() {
    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.experienceTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExperienceTable;
