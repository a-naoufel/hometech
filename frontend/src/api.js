import axios from "axios";


const apiUrl = "/choreo-apis/hometech/backend/rest-api-be2/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});


export default api;
