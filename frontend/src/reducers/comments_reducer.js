import { RECEIVE_COMMENT, RECEIVE_NEW_COMMENT, RECEIVE_POST_COMMENTS, DELETE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';

// all: { }, post: { }, comment: { }, new: null 
const CommentsReducer = (state = { }, action) => {

    Object.freeze(state);
    let newState = Object.assign({ all: {} }, state)

    switch (action.type) {
        case RECEIVE_NEW_COMMENT:
            newState.all = [...newState.all, action.comment.data]
            return newState;
        case DELETE_COMMENT:
            newState.all = newState.all.filter((comment) => action.commentId !== comment._id )
            // delete newState.all[action.commentId]
            return newState;        
        case RECEIVE_COMMENTS:
            newState.all = action.comments.data
            return newState;

        case RECEIVE_POST_COMMENTS:
            newState.comments = action.comments.data;
            return newState;
        case RECEIVE_COMMENT:
            newState.comment = action.comment.data;
            return newState;
        default:
            return state;
    }


};

export default CommentsReducer;