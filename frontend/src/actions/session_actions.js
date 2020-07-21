import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_USER_ROOMS_ADD = "RECEIVE_USER_ROOMS_ADD";

export const addRoomToRedux = room => {

    return {
        type: RECEIVE_USER_ROOMS_ADD,
        room
    };

}

export const receiveCurrentUser = currentUser => {
//////debugger
return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};

// This will be used to redirect the user to the login page upon signup
export const receiveUserSignIn = () => {
//////debugger
    return {
        type: RECEIVE_USER_SIGN_IN
    }
};
  
// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch => {
////debugger
    return APIUtil.signup(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
    })
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        })
}

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => {
//////debugger
return APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
//////debugger
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
//////debugger
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
}

export const logout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false)
    // Dispatch a logout action
    dispatch(logoutUser())
};