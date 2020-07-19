import { RECEIVE_COMMENT, RECEIVE_NEW_COMMENT, RECEIVE_POST_COMMENTS, DELETE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';

// all: { }, post: { }, comment: { }, new: null 
const CommentsReducer = (state = { }, action) => {

    Object.freeze(state);
    let newState = Object.assign({ all: {} }, state)

    switch (action.type) {


        case RECEIVE_POST_COMMENTS:
            
            // console.log('let us see all the states: ');
            // console.log(newState);
            // console.log(action.comments.data);

            // let nextState = Object.assign({}, newState, action.comments.data);
            // console.log(nextState);
            // let mergedState = merge({}, newState, action.comments.data);
            // console.log(mergedState);

            newState.comments = action.comments.data;

            // debugger;
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
            
            // newState = Object.assign({}, state);
            delete newState.all[action.commentId]
            return newState;     
            
        case RECEIVE_COMMENTS:
            newState.all = action.comments.data
            debugger;
            return newState;
        default:
            return state;
    }


};

export default CommentsReducer;