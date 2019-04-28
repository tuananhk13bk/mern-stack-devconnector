import {
  ADD_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENT_ERRORS,
  CHANGE_COMMENT_CONTENT_TO_ADD,
  COMMENT_LOADING
} from "../actions/comment/commentActionTypes";

const initialState = {
  commentText: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName:
      return { ...state, ...payload };

    default:
      return state;
  }
};
