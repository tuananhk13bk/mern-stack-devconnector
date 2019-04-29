import React from "react";
import Moment from "react-moment";
import DeleteButton from "../DeleteButton";

const DashBoardTable = ({
  title,
  tableHeadersList,
  rowItemsList,
  handleOnDelete
}) => {
  return (
    <div>
      <h4 className="mb-4">{title}</h4>
      <table className="table">
        <thead>
          <tr>
            {tableHeadersList.map(header => (
              <th className="w-25">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowItemsList.map(rowItem => (
            <tr key={rowItem._id}>
              <td>{rowItem.company || rowItem.school}</td>
              <td>{rowItem.title || rowItem.degree}</td>
              <td>
                <Moment format="YYYY/MM/DD">{rowItem.from}</Moment>
                {" - "}
                {rowItem.to ? (
                  <Moment format="YYYY/MM/DD">{rowItem.to}</Moment>
                ) : (
                  "Now"
                )}
              </td>
              <td>
                <DeleteButton
                  label="Delete Experience"
                  handleOnDelete={handleOnDelete}
                  deleteId={rowItem._id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoardTable;
