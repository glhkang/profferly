import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  RECEIVE_NEW_POST,
  DELETE_POST,
  RECEIVE_POST,
} from "../actions/post_actions";

const PostsReducer = (
  state = { all: {}, user: {}, post: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      newState.all = action.posts.data;
      return newState;
    case RECEIVE_POST:
      newState.post = action.post.data;
      return newState;
    case RECEIVE_NEW_POST:
      newState.new = action.post.data;
      return newState;
    case DELETE_POST:
      newState = Object.assign({}, state);
      delete newState.all[action.post.id];
      return newState;
    case RECEIVE_USER_POSTS:
      newState.user = action.posts.data;
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
