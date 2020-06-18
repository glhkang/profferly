import axios from "axios";

export const getMarkers = () => {
  return axios.get("/api/markers");
};

export const writeMarker = (data) => {
  return axios.post("/api/markers/", data);
};
