import React, { Component } from "react";
import Input from "../Input";

class AuthForm extends Component {
  componentDidMount() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) history.push("/dashboard");
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { handleOnSubmit, inputsList, history } = this.props;
    // return a object with keys are all input name, values are input value
    const submitValue = inputsList.reduce((accum, current) => {
      const key = current.name;
      const value = current.value;
      return { ...accum, [key]: value };
    }, {});
    console.log(submitValue);
    handleOnSubmit(submitValue, history);
  };
  render() {
    const { title, description, inputsList, buttonLabel } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="display-4 text-center">{title}</h1>
          <p className="lead text-center">{description}</p>
          <form noValidate onSubmit={this.handleOnSubmit}>
            {inputsList.map(input => (
              <Input
                key={input.name}
                autoFocus={input.autoFocus}
                name={input.name}
                type={input.type}
                info={input.info}
                error={input.error}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.onChange}
              />
            ))}
            <input
              type="submit"
              value={buttonLabel}
              className="btn btn-outline-info btn-block mt-4"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
