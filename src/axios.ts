import axios from "axios";

const instance = axios.create({
  baseURL: "http://62.113.97.194:8080/api/v1/",
});

instance.interceptors.request.use((config) => {
  if (window.localStorage.getItem("token")) {
    config.headers.Authorization = window.localStorage.getItem("token");
  }
  return config;
});

export default instance;
