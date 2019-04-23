import React from "react";
import classnames from "classnames";

const Select = ({ error, name, value, onChange, info, options }) => {
  const optionList = options.map(item => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        {optionList}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Select;
