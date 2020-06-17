import { getPosts, getUserPosts, writePost, getPost, deletePost } from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_POST = "RECEIVE_POST"

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const receiveUserPosts = posts => ({
    type: RECEIVE_USER_POSTS,
    posts 
});

export const receiveNewPost = post => ({
    type: RECEIVE_NEW_POST,
    post
})

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

export const removeUserPost = postId => ({
    type: DELETE_POST,
    postId 
})

export const fetchPosts = () => dispatch => (
    getPosts()
        .then(posts => dispatch(receivePosts(posts)))
        .catch(err => console.log(err))
);

export const fetchUserPosts = id => dispatch => (
    getUserPosts(id)
        .then(posts => dispatch(receiveUserPosts(posts)))
        .catch(err => console.log(err))
);

export const composePost = data => dispatch => (
    writePost(data)
        .then(post => dispatch(receiveNewPost(post)))
        .catch(err => console.log(err))
);

export const removePost = (postId) => (dispatch) => (
    deletePost(postId)
        .then((postId) => dispatch(removeUserPost(postId)))
        .catch((err) => console.log(err))
);

export const fetchPost = id => dispatch => (
    getPost(id)
        .then(post => dispatch(receivePost(post))
        )
);

