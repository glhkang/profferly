import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN,
  RECEIVE_USER_ROOMS_ADD,
} from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER_ROOMS_ADD: {
      console.log("SESSION STATE", state, action);

      return {
        ...state,
        user: {
          ...state.user,
          rooms: [
            ...state.user.rooms.filter((o) => o !== action.room),
            action.room,
          ],
        },
      };
    }
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        isSignedIn: true,
      };
    default:
      return state;
  }
}
