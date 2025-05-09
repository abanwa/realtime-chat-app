import axios from "axios";
import { frontEndBaseURL } from "./utils.js";

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
  baseURL: import.meta.env.MODE === "development" ? `${frontEndBaseURL}/api` : "/api",
  withCredentials: true,
});
