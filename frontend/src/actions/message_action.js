import { getRoomsMessages } from "../util/message_api_util";

export const RECEIVE_ROOMS_MESSAGES = "RECEIVE_ROOMS_MESSAGES";
export const NEW_LOCAL_MESSAGE = "NEW_LOCAL_MESSAGE";

export const receiveRoomMessages = (messages) => ({
  type: RECEIVE_ROOMS_MESSAGES,
  messages,
});

export const newLocalMessage = function (message) {
  // debugger;
  return {
    type: NEW_LOCAL_MESSAGE,
    message,
  };
};

export const fetchRoomMessages = (name) => (dispatch) =>
  getRoomsMessages(name)
    .then((messages) => dispatch(receiveRoomMessages(messages)))
    .catch((err) => console.log(err));
