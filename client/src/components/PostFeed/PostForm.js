import React, { Component } from "react";
import TextArea from "../TextArea";

class PostForm extends Component {
  render() {
    const {
      text,
      errors,
      placeholder,
      postId,

      onChange,
      addContent
    } = this.props;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Something...</div>
          <div className="card-body">
            <form
              onSubmit={event => {
                event.preventDefault();

                const newContent = {
                  text
                };
                if (!postId) {
                  addContent(newContent);
                } else {
                  addContent(postId, newContent);
                }
              }}
            >
              <div className="form-group">
                <TextArea
                  name="text"
                  value={text}
                  onChange={onChange}
                  placeholder={placeholder}
                  className="form-control form-control-lg"
                  error={errors.text}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
