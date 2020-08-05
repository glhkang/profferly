import { getRoomsMessages } from "../util/message_api_util";

export const RECEIVE_ROOMS_MESSAGES = "RECEIVE_ROOMS_MESSAGES";
export const BEGIN_RECEIVE_ROOMS_MESSAGES = "BEGIN_RECEIVE_ROOMS_MESSAGES";
export const FAIL_RECEIVE_ROOMS_MESSAGES = "FAIL_RECEIVE_ROOMS_MESSAGES";
export const NEW_LOCAL_MESSAGE = "NEW_LOCAL_MESSAGE";

export const beginReceiveRoomMessages = () => ({
         type: BEGIN_RECEIVE_ROOMS_MESSAGES,
       });

export const failReceiveRoomMessages = () => ({
         type: FAIL_RECEIVE_ROOMS_MESSAGES,
       });

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

export const fetchRoomMessages = (name) => (dispatch) => {

  dispatch(beginReceiveRoomMessages());

  getRoomsMessages(name)
    .then((messages) => dispatch(receiveRoomMessages(messages)))
    .catch((err) => {
      console.log(err);
      dispatch(failReceiveRoomMessages());
    });
}

