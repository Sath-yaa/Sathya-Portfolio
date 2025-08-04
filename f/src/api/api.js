import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/users' });

export const registerUser = (data) => API.post('/register', data);
export const loginUser = (data) => API.post('/login', data);
export const updateUserLocation = (data) => API.post('/update-location', data); 
export const addUserPin = (userId, pinData) => API.post(`/users/${userId}/pins`, pinData);
export const getUserPins = (userId) =>API.get(`/users/${userId}/pins`);
export const deleteUserPinByIndex = (userId, index) =>API.delete(`/users/${userId}/pins/${index}`);