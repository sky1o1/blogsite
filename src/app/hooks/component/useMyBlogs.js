import { useGetBlogsByUserId } from "../api/useBlogs";
import { useGetUser } from "../api/useUser";

export function useMyBlogs() {
  const { data: userData } = useGetUser();
  const userId = localStorage.getItem("id");
  const { data, isLoading } = useGetBlogsByUserId(userId);

  return {
    data,
    isLoading,
    userData,
  };
}
