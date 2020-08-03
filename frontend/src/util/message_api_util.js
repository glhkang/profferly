import axios from "axios";

export const getRoomsMessages = (name) => {
  // debugger;
  return axios.get(`/api/messages/rooms/${name}`);
};
