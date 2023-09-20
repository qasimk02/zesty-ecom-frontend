import axios from "axios";

export const API_BASE_URL = "http://localhost:9090";
const jwt = localStorage.getItem("jwtToken");

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    Content: "application/json",
  },
});
