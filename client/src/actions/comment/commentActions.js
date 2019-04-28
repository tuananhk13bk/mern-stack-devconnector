import axios from "axios";

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENT_ERRORS,
  CHANGE_COMMENT_CONTENT_TO_ADD,
  COMMENT_LOADING,
  CLEAR_COMMENT_FORM
} from "./commentActionTypes";

export const setCommentLoading = () => ({
  type: COMMENT_LOADING
});

export const addComment = (postId, postData) => dispatch => {
  axios
    .put(`/api/post/comment/${postId}`, postData)
    .then(res => {
      dispatch(clearCommentForm());
      dispatch({
        type: ADD_COMMENT,
        payload: res.data.comments
      });
    })
    .catch(err =>
      dispatch({ type: RECEIVE_COMMENT_ERRORS, payload: err.response.data })
    );
};

export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/post/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: DELETE_COMMENT,
        payload: res.data.comments
      })
    )
    .catch(err =>
      dispatch({ type: RECEIVE_COMMENT_ERRORS, payload: err.response.data })
    );
};

export const changeCommentContentToAdd = text => ({
  type: CHANGE_COMMENT_CONTENT_TO_ADD,
  payload: text
});

export const clearCommentForm = () => ({
  type: CLEAR_COMMENT_FORM
});
