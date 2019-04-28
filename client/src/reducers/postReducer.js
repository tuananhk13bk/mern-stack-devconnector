import modifyObjectInArray from "../utils/modifyObjectInArray";

import {
  GET_ALL_POSTS,
  ADD_POST,
  DELETE_POST,
  ADD_LIKE,
  POST_LOADING,
  RECEIVE_POST_ERRORS,
  CHANGE_POST_CONTENT_TO_ADD,
  ADD_UNLIKE,
  GET_POST,
  CLEAR_POST_FORM
} from "../actions/post/postActionTypes";

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENT_ERRORS,
  CHANGE_COMMENT_CONTENT_TO_ADD,
  COMMENT_LOADING,
  CLEAR_COMMENT_FORM
} from "../actions/comment/commentActionTypes";

const initialState = {
  allPosts: [],
  post: {},
  text: "",
  commentText: "",
  loading: false,
  commentLoading: false,
  commentErrors: {},
  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_LOADING:
      return { ...state, loading: true };

    case COMMENT_LOADING:
      return { ...state, commentLoading: true };

    case GET_ALL_POSTS:
      return { ...state, allPosts: payload, loading: false };

    case GET_POST:
      return { ...state, post: payload, loading: false };

    case ADD_POST:
      return { ...state, allPosts: [payload, ...state.allPosts] };

    case DELETE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter(post => post._id !== payload)
      };

    case ADD_LIKE:
      return {
        ...state,
        allPosts: modifyObjectInArray(
          state.allPosts,
          payload.postId,
          payload.updatedPost
        )
      };

    case ADD_UNLIKE:
      return {
        ...state,
        allPosts: modifyObjectInArray(
          state.allPosts,
          payload.postId,
          payload.updatedPost
        )
      };

    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload }
      };

    case DELETE_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload }
      };

    case CHANGE_POST_CONTENT_TO_ADD:
      return { ...state, text: payload };

    case CHANGE_COMMENT_CONTENT_TO_ADD:
      return { ...state, commentText: payload };

    case RECEIVE_POST_ERRORS:
      return { ...state, errors: payload };

    case RECEIVE_COMMENT_ERRORS:
      return { ...state, commentErrors: payload };

    case CLEAR_POST_FORM:
      return { ...state, text: "", errors: {} };

    case CLEAR_COMMENT_FORM:
      return { ...state, commentText: "", commentErrors: {} };

    default:
      return state;
  }
};
