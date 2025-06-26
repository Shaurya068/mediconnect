import axios from './axiosConfig';

export const submitReview = (doctorId, rating, comment) =>
    axios.post('/reviews', { doctorId, rating, comment });

export const fetchDoctorReviews = (doctorId) =>
    axios.get(`/reviews/${doctorId}`);
