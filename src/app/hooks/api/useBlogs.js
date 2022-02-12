import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getBlogs,
  getBlogsById,
  getBlogsByUserId,
  postBlog,
  updateBlog,
  deleteBlog,
} from "../../api/blogs";

export const useGetBlogs = () => {
  return useQuery(["getBlogs"], () => getBlogs(), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useGetBlogsById = (id) => {
  return useQuery(["getBlogsById", id], () => getBlogsById(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useGetBlogsByUserId = (userId) => {
  return useQuery(
    ["getBlogsByUserId", userId],
    () => getBlogsByUserId(userId),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
};

export const usePostBlog = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["postBlog"], (formData) => postBlog(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getBlogs"]);
      queryClient.invalidateQueries(["getBlogsByUserId"]);
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (data) => {
      alert(data.error);
    },
  });
};

export const useUpdateBlog = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["postBlog"],
    ({ id, formData }) => updateBlog({ id, formData }),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(["getBlogs"]);
        queryClient.invalidateQueries(["getBlogsById"]);
        queryClient.invalidateQueries(["getBlogsByUserId"]);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (data) => {
        alert(data.error);
      },
    }
  );
};

export const useDeleteBlog = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["deleteBlog"], (id) => deleteBlog(id), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getBlogs"]);
      queryClient.invalidateQueries(["getBlogsByUserId"]);
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (data) => {
      alert(data.error);
    },
  });
};
