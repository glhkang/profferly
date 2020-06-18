import { getPhotos, getPhoto, getPostPhotos, deletePhoto } from '../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_POST_PHOTOS = "RECEIVE_POST_PHOTOS";
export const DELETE_PHOTO = "DELETE_PHOTO";

export const receivePhotos = photos => {
debugger
    return {
        type: RECEIVE_PHOTOS,
        photos 
    }
};

export const receivePostPhotos = photos => ({
    type: RECEIVE_POST_PHOTOS,
    photos
});

export const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo
});

// export const removePostPhoto = photoId = ({
//     type: DELETE_PHOTO,
//     photoId
// })

export const fetchPhotos = () => dispatch => (
    getPhotos()
    .then(photos => dispatch(receivePhotos(photos)))
    .catch(err => console.log(err))
);

export const fetchPhoto = id => dispatch => (
    getPhoto(id)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const fetchPostPhotos = id => dispatch => (
    getPostPhotos(id)
        .then(photos => dispatch(receivePostPhotos(photos)))
        .catch(err => console.log(err))
);

// export const removePhoto = photoId => {
//     deletePhoto(photoId)
//     .then(() => { this.setState({
//         photos: this.state.photos.filter(photo => photo._id !== photoId)
//       });
//     });
//   };

// export const removePhoto = (photoId) => (dispatch) => (
//     deletePhoto(photoId)
//         .then((photoId) => dispatch(removePostPhoto(photoId)))
//         .catch((err) => console.log(err))
// );