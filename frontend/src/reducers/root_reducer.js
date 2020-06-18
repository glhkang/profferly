import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import posts from './posts_reducer';
import users from './users_reducer';
import markers from './markers_reducer';

//debugger

const RootReducer = combineReducers({
  session,
  errors,
  posts,
  users,
  markers
});

export default RootReducer;