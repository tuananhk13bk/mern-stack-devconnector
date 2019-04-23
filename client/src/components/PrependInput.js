import React from "react";
import classnames from "classnames";

const PrependInput = ({
  name,
  placeholder,
  value,
  error,
  icon,
  iconColorClass,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={`${icon} ${iconColorClass}`} />
        </span>
      </div>
      <input
        type={type || "text"}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default PrependInput;
