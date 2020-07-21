import { RECEIVE_ROOMS_MESSAGES } from "../actions/message_action"

const MessagesReducer = ( state = { room: {} }, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ROOMS_MESSAGES:
      newState.room = action.messages.data;
    default: 
      return state;
  }
};

export default MessagesReducer;
