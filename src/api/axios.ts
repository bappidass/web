// axios.js
import axios from "axios";

// 🔹 Create Axios instance
const api = axios.create({
  baseURL: "https://college-project-338l.onrender.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Request Interceptor (runs before every request)
api.interceptors.request.use(
  (config) => {
    // Example: Add token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor (runs after every response)
api.interceptors.response.use(
  (response) => response.data, // return only the data
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data.message || error.message);
    } else {
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
