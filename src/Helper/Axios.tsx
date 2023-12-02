import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  // baseURL: "http://localhost:9000/",
  baseURL: "https://dummyjson.com/",

  // withCredentials: true,
  timeout: 3000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
