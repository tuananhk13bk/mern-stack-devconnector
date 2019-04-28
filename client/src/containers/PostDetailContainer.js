import { connect } from "react-redux";
import PostDetail from "../components/PostDetail/PostDetail";

import {
  changeCommentContentToAdd,
  addComment,
  deleteComment
} from "../actions/comment/commentActions";

import { getPost } from "../actions/post/postActions";

const mapStateToProps = state => {
  const {
    post,
    commentLoading,
    commentText,
    commentErrors
  } = state.postReducer;
  const { user } = state.loginReducer;
  return { user, post, commentLoading, commentText, commentErrors };
};

const mapDispatchToProps = {
  getPost,
  changeCommentContentToAdd,
  addComment,
  deleteComment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
