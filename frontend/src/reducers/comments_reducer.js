import { RECEIVE_COMMENT, RECEIVE_NEW_COMMENT, RECEIVE_POST_COMMENTS, DELETE_COMMENT } from '../actions/comment_actions';

// all: { }, post: { }, comment: { }, new: null 
const CommentsReducer = (state = { }, action) => {

    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch (action.type) {


        case RECEIVE_POST_COMMENTS:


            newState.comments = action.comments.data;
            // newState.post.comments = action.comments.data;
            // console.log('current state:')
            // console.log(state);
            // console.log('current newState:')
            // console.log(newState);
            debugger;
            return newState;

        
        case RECEIVE_COMMENT:
            newState.comment = action.comment.data;
            // console.log(newState);
            // debugger;
            return newState;

        case RECEIVE_NEW_COMMENT:
            newState.new = action.comment.data;
            // console.log(newState);
            // debugger;
            return newState;

        case DELETE_COMMENT:
            
            newState = Object.assign({}, state);
            delete newState.all[action.commentId]
            // console.log(newState);
            // debugger;
            return newState;     
            
            
        default:
            return state;
    }


};

export default CommentsReducer;