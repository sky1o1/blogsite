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

export const uploadFoto = async (formValues, id) => {
  const formdata = new FormData();
  formdata.append("photo", formValues);
  const { data } = await axiosInstance.put(`/user/${id}/foto`, formdata);
  return data;
};
