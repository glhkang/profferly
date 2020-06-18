import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import posts from './posts_reducer';
import users from './users_reducer';
import photos from './photos_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  posts,
  photos,
  users
});

export default RootReducer;