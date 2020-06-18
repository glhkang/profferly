import { RECEIVE_PHOTOS, RECEIVE_PHOTO, RECEIVE_POST_PHOTOS, DELETE_PHOTO } from '../actions/photo_actions';

const PhotosReducer = (state = { all: {}, post: {}, photo: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            newState.all = action.photos.data;
            return newState;
        case RECEIVE_PHOTO:
            newState.photo = action.photo.data;
            return newState;
        case DELETE_PHOTO:
            newState = Object.assign({}, state);
            delete newState.all[action.photo.id];
            return newState;
        case RECEIVE_POST_PHOTOS:
            newState.user = action.photos.data;
            return newState;
        default:
            return state;
    }
};

export default PhotosReducer;