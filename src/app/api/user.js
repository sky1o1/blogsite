import { axiosInstance } from "../../app/api/axiosInterceptor";

export const getUser = async (fetch) => {
  const { data } = await axiosInstance.get(`/auth/me`);
  return data;
};

export const editUser = async (formValues) => {
  const { name, email } = formValues;
  const { token } = await axiosInstance.put(`/auth/updatedetails`, {
    name,
    email,
  });
  return token;
};
