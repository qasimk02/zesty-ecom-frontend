import axios from "axios";

// export const API_BASE_URL = "http://localhost:9090";
export const API_BASE_URL =
  "http://zesty-ecom-api-env.eba-gpdmkszt.ap-south-1.elasticbeanstalk.com";
const jwt = localStorage.getItem("jwtToken");

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    Content: "application/json",
  },
});
