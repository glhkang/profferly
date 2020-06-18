import axios from 'axios';

export const getPhotos = () => {
    return axios.get('/api/photos')
};

export const getPostPhotos = id => {
    return axios.get(`/api/photos/post/${id}`)
};

export const uploadPhoto = data => {
    return axios.post('api/photos/', data)
}

export const getPhoto = id => {
    return axios.get(`/api/photos/${id}`)
};

export const deletePhoto = id => {
    return axios.delete(`/api/photos/${id}`)
};