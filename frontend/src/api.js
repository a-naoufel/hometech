import axios from "axios";


const apiUrl = "https://1b657ac4-d4f1-42dc-9e74-8014b84993fa-dev.e1-us-east-azure.choreoapis.dev/hometech/backend/rest-api-be2/v1.0";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});


export default api;
