import { getMarkers, writeMarker } from "../util/marker_util";

export const RECEIVE_MARKERS = "RECEIVE_MARKERS";
export const RECEIVE_MARKER = "RECEIVE_MARKER";

export const receiveMarkers = (markers) => ({
  type: RECEIVE_MARKERS,
  markers,
});

export const receiveMarker = (marker) => ({
  type: RECEIVE_MARKER,
  marker,
});

export const fetchMarkers = () => (dispatch) =>
  getMarkers()
    .then((markers) => dispatch(receiveMarkers(markers)))
    .catch((err) => console.log(err));

export const createMarker = (data) => (dispatch) =>
  writeMarker(data)
    .then((marker) => dispatch(receiveMarker(marker)))
    .catch((err) => console.log(err));
