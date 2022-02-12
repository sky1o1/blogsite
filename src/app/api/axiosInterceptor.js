import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
  },
});

//add token to all request
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (
      (error.response &&
        error.response.data.message === "invalid_or_missing_token") ||
      (error.response && error.response.data.message === "user_disabled")
    ) {
      //remove token fxn here
      window.location.replace("/login");
    } else if (error.response && error.response.data) {
      if (error.response.data.message) {
        const message = error.response.data.message;
        return Promise.reject({ message });
      } else return Promise.reject(error.response.data);
    } else {
      return Promise.reject({
        message: "Some unusual error occured, please try again",
      });
    }
  }
);
