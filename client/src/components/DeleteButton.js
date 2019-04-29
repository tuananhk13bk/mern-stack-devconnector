import React from "react";

const DeleteButton = ({ label, handleOnDelete, deleteId }) => {
  return (
    <button
      onClick={() => handleOnDelete(deleteId)}
      className="btn btn-outline-danger"
    >
      {label}
    </button>
  );
};

export default DeleteButton;
