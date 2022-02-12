import { useGetBlogs } from "../api/useBlogs";

export function useFeedPage() {
  const { data, isLoading, isError } = useGetBlogs();

  return {
    data,
    isLoading,
    isError,
  };
}
