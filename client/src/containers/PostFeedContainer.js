import { connect } from "react-redux";

import PostFeed from "../components/PostFeed/PostFeed";

import {
  changePostContentToAdd,
  getAllPosts,
  addPost,
  deletePost,
  addLike,
  addUnlike
} from "../actions/post/postActions";

const mapStateToProps = state => {
  const { user } = state.loginReducer;
  const { errors, text, allPosts, loading } = state.postReducer;
  return { user, errors, text, allPosts, loading };
};

const mapDispatchToProps = {
  changePostContentToAdd,
  getAllPosts,
  addPost,
  deletePost,
  addLike,
  addUnlike
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFeed);
