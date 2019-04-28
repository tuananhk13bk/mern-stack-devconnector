import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default class PostItem extends Component {
  currentUserLiked = () => {
    const { allLikes, currentUserId } = this.props;
    if (allLikes.filter(like => like.user === currentUserId).length > 0) {
      return true;
    }
    return false;
  };

  currentUserUnliked = () => {
    const { allUnlikes, currentUserId } = this.props;
    if (allUnlikes.filter(unlike => unlike.user === currentUserId).length > 0) {
      return true;
    }
    return false;
  };

  postItemActions = () => {
    const {
      showLikes,
      showCommentButton,
      userId,
      currentUserId,
      postId,
      commentId,
      allLikes,
      allUnlikes,
      deleteContent,
      addLike,
      addUnlike
    } = this.props;
    return (
      <div>
        {showLikes ? (
          <div className="d-inline-block">
            <button
              onClick={() => addLike(postId)}
              className="btn btn-light mr-1"
              type="button"
            >
              <i
                className={classnames(
                  "fas fa-thumbs-up",
                  {
                    "text-info": this.currentUserLiked()
                  },
                  { "text-secondary": this.currentUserUnliked() }
                )}
              />
              <span className="ml-2 badge badge-light">{allLikes.length}</span>
            </button>
            <button
              onClick={() => addUnlike(postId)}
              className="btn btn-light mr-1"
              type="button"
            >
              <i
                className={classnames(
                  "fas fa-thumbs-down",
                  {
                    "text-info": this.currentUserUnliked()
                  },
                  { "text-secondary": this.currentUserLiked() }
                )}
              />
              <span className="ml-2 badge badge-light">
                {allUnlikes.length}
              </span>
            </button>
          </div>
        ) : null}
        {showCommentButton ? (
          <Link to={`/post/${postId}`} className="btn btn-info mr-1">
            Comments
          </Link>
        ) : null}
        {userId === currentUserId ? (
          <button
            onClick={() => {
              if (!commentId) {
                deleteContent(postId);
              } else {
                deleteContent(postId, commentId);
              }
            }}
            className="btn btn-danger mr-1"
          >
            <i className="fas fa-times" />
          </button>
        ) : null}
      </div>
    );
  };

  render() {
    const {
      userId,
      userAvatar,
      userName,
      contentDate,
      contentText
    } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <Link to={`/profile/user/${userId}`}>
              <img
                className="rounded-circle d-none d-md-block"
                src={userAvatar}
                alt=""
              />
            </Link>
            <div className="text-center">
              <p className="mb-0">{userName}</p>
              <small className="font-italic">
                <Moment format="YYYY/MM/DD HH:mm">{contentDate}</Moment>
              </small>
            </div>
          </div>
          <div className="col-md-8">
            <p className="lead">{contentText}</p>
            {this.postItemActions()}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showLikes: true,
  showCommentButton: true
};
