import axios from "axios";
import { getUserFromLocalStorage } from "./localstorage";

export const apiInstance = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

apiInstance.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();

    console.log(config);
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
console.log("hello");
