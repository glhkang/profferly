import { RECEIVE_COMMENT, RECEIVE_COMMENTS, RECEIVE_POST_COMMENTS, DELETE_COMMENT } from '../actions/comment_actions';

const CommentsReducer = ( state = {all: {}, post: {}, comment: {} }, action) => {

    const ogState = Object.freeze(state);
    let newState = Object.assign({}, ogState)

    switch (action.type) {
        case RECEIVE_COMMENT:
            newState.all = action.comments.data;
            return newState;
        case RECEIVE_COMMENTS:
            newState.comment = action.comment.data;
            return newState;
        case RECEIVE_POST_COMMENTS:
            newState.user = action.comments.data;
            return newState;
        case DELETE_COMMENT:
            newState = Object.assign({}, ogState);
            delete newState.all[action.comment.id]
            return newState;            
        default:
            return ogState;
    }


};

export default CommentsReducer;