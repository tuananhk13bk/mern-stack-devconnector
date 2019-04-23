import React from "react";
import spinner from "../img/spinner.gif";
const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: 200, margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
