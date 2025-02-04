import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with deployed backend URL

export const createUser = (userData) => axios.post(`${API_URL}/users`, userData);
export const getBatches = () => axios.get(`${API_URL}/batches`);
export const enrollUser = (enrollmentData) => axios.post(`${API_URL}/enrollments`, enrollmentData);
