import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import Root from './components/root';
// import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import configureStore from './store/store';
import jwt_decode from "jwt-decode";

import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";
import * as PostAction from "./actions/post_actions";
import * as UserAction from "./actions/user_actions";


// ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  window.state = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUsers = UserAction.fetchUsers;
  window.fetchUser = UserAction.fetchUser;
  // window.fetchPosts = PostAction.fetchPosts;
  // window.fetchPost = PostAction.fetchPost;
  // window.removePost = PostAction.removePost;
  // window.composePost = PostAction.composePost;
  // window.fetchUserPosts = PostAction.fetchUserPosts;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  window.getState = store.getState; 
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});

//testing
// window.axios = axios;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// 