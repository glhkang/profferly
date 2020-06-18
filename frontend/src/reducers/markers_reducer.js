import { RECEIVE_MARKERS, RECEIVE_MARKER } from "../actions/marker_action";


const MarkersReducer = (state = { all: {}, new: undefined}, action) => {
    Object.freeze(state);
    
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_MARKERS:
            newState.all = action.markers.data;
            return newState;
        case RECEIVE_MARKER:
            newState.new = action.marker.data;
            return newState;
        default: 
         return state;
    }
}

export default MarkersReducer;