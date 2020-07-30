import {
  RECEIVE_ROOMS_MESSAGES,
  NEW_LOCAL_MESSAGE,
} from "../actions/message_action";

const MessagesReducer = (state = [], action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ROOMS_MESSAGES:
      newState = action.messages.data;
      return newState;

    case NEW_LOCAL_MESSAGE:
      newState = [...state, action.message];
      return newState;
    default:
      return state;
  }
};

export default MessagesReducer;
