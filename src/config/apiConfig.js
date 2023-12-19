import axios from "axios";

// export const API_BASE_URL = "http://localhost:9090";
export const API_BASE_URL =
  "https://zesty-ecom-backend-production.up.railway.app";
const jwt = localStorage.getItem("jwtToken");

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    Content: "application/json",
  },
});
