import React from "react";
import classnames from "classnames";

const Input = ({
  type,
  name,
  placeholder,
  value,
  disabled,
  onChange,
  info,
  error
}) => {
  return (
    <div className="form-group">
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        onChange={event => onChange(event.target.value)}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
