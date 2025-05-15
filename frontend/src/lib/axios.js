import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    baseURL: import.meta.env.MODE === "https://chattyyy.onrender.com/api",

  withCredentials: true,
});
