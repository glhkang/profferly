import { getRoomsMessages } from "../util/message_api_util";

export const RECEIVE_ROOMS_MESSAGES = "RECEIVE_ROOMS_MESSAGES";

export const receiveRoomMessages = (messages) => ({
    type: RECEIVE_ROOMS_MESSAGES,
    messages,
});


export const fetchRoomMessages = (id) => (dispatch) =>
  getRoomsMessages(id)
    .then((messages) => dispatch(receiveRoomMessages(messages)))
    .catch((err) => console.log(err)
);
