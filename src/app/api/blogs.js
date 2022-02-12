import { axiosInstance } from "../../app/api/axiosInterceptor";

export const getBlogs = async () => {
  const { data } = await axiosInstance.get(`/blogs`);
  return data;
};

export const getBlogsById = async (id) => {
  if (id) {
    const { data } = await axiosInstance.get(`/blogs/${id}`);
    return data;
  }
};

export const getBlogsByUserId = async (UserId) => {
  if (UserId) {
    const { data } = await axiosInstance.get(`/blogs/user/${UserId}`);
    return data;
  }
};

export const postBlog = async (formValues) => {
  const { title, description } = formValues;
  const { data, success, message } = await axiosInstance.post(`/blogs`, {
    title,
    description,
  });
  return { data, success, message };
};

export const updateBlog = async ({ id, formData }) => {
  const { data, success, message } = await axiosInstance.put(
    `/blogs/${id}`,
    formData
  );
  return { data, success, message };
};

export const deleteBlog = async (id) => {
  const { data, success, message } = await axiosInstance.delete(`/blogs/${id}`);
  return { data, success, message };
};
