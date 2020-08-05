import {
  BEGIN_RECEIVE_ROOMS_MESSAGES,
  FAIL_RECEIVE_ROOMS_MESSAGES,
  RECEIVE_ROOMS_MESSAGES,
  NEW_LOCAL_MESSAGE,
} from "../actions/message_action";

const MessagesReducer = (state = { loadin: true, messages: [] }, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch (action.type) {
    case BEGIN_RECEIVE_ROOMS_MESSAGES:
      newState.loading = true;
      newState.messages = [];
      return newState;

    case FAIL_RECEIVE_ROOMS_MESSAGES:
      newState.loading = false;
      return newState;

    case RECEIVE_ROOMS_MESSAGES:
      newState.loading = false;
      newState.messages = action.messages.data;

      return newState;

    case NEW_LOCAL_MESSAGE:
      newState.messages = [...state.messages, action.message];

      return newState;
    default:
      return state;
  }
};

export default MessagesReducer;
