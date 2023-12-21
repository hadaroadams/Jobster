import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

apiInstance.interceptors.request.use((config) => {
  console.log(config);
  return config;
});
