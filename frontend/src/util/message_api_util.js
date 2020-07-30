import axios from "axios";

export const getRoomsMessages = (name) => {
  return axios.get(`/api/messages/rooms/${name}`);
};
