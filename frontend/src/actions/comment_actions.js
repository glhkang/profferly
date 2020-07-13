import { createComment, getAllComments, getPostComments, getComment, deleteComment } from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment,
});

export const receiveAllComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

export const receivePostComments = comments => ({
    type: RECEIVE_POST_COMMENTS,
    comments
});

export const destroyComment = commentId => ({
    type: DELETE_COMMENT,
    commentId,
});

export const fetchComment = commentId => dispatch => (
    getComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
        .catch(err => console.log(err))
);

export const fetchAllComments = () => dispatch => (
    getAllComments()
        .then(comments => dispatch(receiveAllComments(comments)))
        .catch(err => console.log(err))
);

export const fetchPostComments = () => dispatch => (
    getPostComments()
        .then(comments => dispatch(receivePostComments(comments)))
        .catch(err => console.log(err))
);

export const composeComment = data => dispatch => {
    return (
        createComment(data)
            .then(comment => dispatch(receiveComment(comment)))
            .catch(err => console.log(err))
    )
};

export const removeComment = (commentId) => dispatch => (
    deleteComment(commentId)
        .then(commentId => dispatch(destroyComment(commentId)))
        .catch(err => console.log(err))
);