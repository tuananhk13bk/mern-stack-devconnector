import React from "react";
import { Link } from "react-router-dom";
import PostDetailContainer from "../containers/PostDetailContainer";

const PostDetailPage = () => {
  return (
    <div className="post">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/feed" className="btn btn-light mb-3">
              Back To Feed
            </Link>
            <PostDetailContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
