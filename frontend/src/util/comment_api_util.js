import axios from 'axios';

export const createComment = comment => {
    return axios.post('api/comments/', comment)
}

// export const getAllComments = () => {
//     return axios.get('/api/comments')
// };

export const getPostComments = postId => {
    return axios.get(`/api/comments/post/${postId}`)
};

export const getComment = commentId => {
    return axios.get(`/api/comments/${commentId}`)
};

export const deleteComment = commentId => {
    return axios.delete(`/api/comments/${commentId}`)
};