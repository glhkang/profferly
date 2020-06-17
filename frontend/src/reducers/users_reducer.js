import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USERS:
            action.users.data.forEach(user => {
                newState[user._id] = user                
            });
            return newState;
        case RECEIVE_USER:
            newState.user = action.user.data;
            return newState;
        default:
            return state;
    }
};

export default UsersReducer;