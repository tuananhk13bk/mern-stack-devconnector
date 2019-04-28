import React from "react";
import PostFeedContainer from "../containers/PostFeedContainer";

const PostFeedPage = () => {
  return (
    <div className="feed pt-4 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <PostFeedContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFeedPage;
