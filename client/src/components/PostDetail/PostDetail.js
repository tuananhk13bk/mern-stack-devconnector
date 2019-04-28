import React, { Component } from "react";
import Spinner from "../Spinner";
import PostItem from "../PostFeed/PostItem";
import { withRouter } from "react-router-dom";
import PostForm from "../PostFeed/PostForm";
import AllPostsList from "../PostFeed/AllPostsList";

class PostDetail extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
  }

  render() {
    const {
      user,
      post,
      commentLoading,
      commentText,
      commentErrors,

      changeCommentContentToAdd,
      addComment,
      deleteComment
    } = this.props;
    let postDetail;
    if (post === null || commentLoading || Object.keys(post).length === 0) {
      postDetail = <Spinner />;
    } else {
      postDetail = (
        <div>
          {/* comment content =>> reuse component */}
          <PostItem
            showLikes={false}
            showCommentButton={false}
            userId={post.user}
            userAvatar={post.avatar}
            userName={post.name}
            contentDate={post.date}
            contentText={post.text}
          />
          {/* add comment form */}
          <PostForm
            text={commentText}
            errors={commentErrors}
            placeholder="Write a comment..."
            postId={post._id}
            onChange={changeCommentContentToAdd}
            addContent={addComment}
          />
          <AllPostsList>
            {post.comments.map(comment => (
              <PostItem
                key={comment._id}
                showLikes={false}
                showCommentButton={false}
                currentUserId={user.id}
                userId={comment.user}
                userAvatar={comment.avatar}
                userName={comment.name}
                postId={post._id}
                commentId={comment._id}
                contentDate={comment.date}
                contentText={comment.text}
                deleteContent={deleteComment}
              />
            ))}
          </AllPostsList>
        </div>
      );
    }
    return postDetail;
  }
}

export default withRouter(PostDetail);
