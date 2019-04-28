import axios from "axios";

import {
  GET_ALL_POSTS,
  ADD_POST,
  DELETE_POST,
  POST_LOADING,
  RECEIVE_POST_ERRORS,
  CHANGE_POST_CONTENT_TO_ADD,
  ADD_LIKE,
  ADD_UNLIKE,
  GET_POST
} from "./postActionTypes";

export const getAllPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/post")
    .then(res => dispatch({ type: GET_ALL_POSTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ALL_POSTS, payload: null }));
};

export const getPost = postId => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/post/${postId}`)
    .then(res => dispatch({ type: GET_POST, payload: res.data }))
    .catch(err => dispatch({ type: GET_POST, payload: null }));
};

export const addPost = postData => dispatch => {
  axios
    .post("/api/post", postData)
    .then(res =>
      // because we dont want to reload page to getback postId, we need to add the id return back from server to latest post that show on page as state
      dispatch({ type: ADD_POST, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: RECEIVE_POST_ERRORS, payload: err.response.data })
    );
};

export const deletePost = postId => dispatch => {
  axios
    .delete(`/api/post/${postId}`)
    .then(res => dispatch({ type: DELETE_POST, payload: postId }))
    .catch(err =>
      dispatch({ type: RECEIVE_POST_ERRORS, payload: err.response.data })
    );
};

export const addLike = postId => dispatch => {
  axios
    .post(`/api/post/like/${postId}`)
    .then(res =>
      dispatch({
        type: ADD_LIKE,
        payload: { postId, updatedPost: res.data }
      })
    )
    .catch(err =>
      dispatch({ type: RECEIVE_POST_ERRORS, payload: err.response.data })
    );
};

export const addUnlike = postId => dispatch => {
  axios
    .post(`/api/post/unlike/${postId}`)
    .then(res =>
      dispatch({
        type: ADD_UNLIKE,
        payload: { postId, updatedPost: res.data }
      })
    )
    .catch(err =>
      dispatch({ type: RECEIVE_POST_ERRORS, payload: err.response.data })
    );
};

export const setPostLoading = () => ({
  type: POST_LOADING
});

export const changePostContentToAdd = content => ({
  type: CHANGE_POST_CONTENT_TO_ADD,
  payload: content
});
