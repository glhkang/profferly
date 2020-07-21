import axios from "axios";


export const getRoomsMessages = (id) => {
  return axios.get(`/api/messages/rooms/${id}`);
};
