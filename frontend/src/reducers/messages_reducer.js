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
      newState.messages = action.messages.data.sort(dateSort);

      return newState;

    case NEW_LOCAL_MESSAGE:
      newState.messages = [...state.messages, action.message].sort(dateSort);

      return newState;
    default:
      return state;
  }
};

function dateSort(value1, value2) {

  const date1 = Date.parse(value1);
  const date2 = Date.parse(value2);

  return date1 - date2;

}

export default MessagesReducer;
