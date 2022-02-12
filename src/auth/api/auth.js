import { axiosInstance } from "../../app/api/axiosInterceptor";

export const login = async (formValues) => {
  const { email, password } = formValues;
  const { token } = await axiosInstance.post(`/auth/login`, {
    email,
    password,
  });
  return token;
};

export const register = async (formValues) => {
  const { name, email, password } = formValues;
  const { data } = await axiosInstance.post(`/auth/register`, {
    name,
    email,
    password,
    role: "user",
  });
  return data;
};
