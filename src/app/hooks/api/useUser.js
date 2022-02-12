import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, editUser } from "../../api/user";

export const useGetUser = (val) => {
  return useQuery(["getUser"], () => getUser(), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    enabled: val,
  });
};

export const useUpdateProfile = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(["updateProfile"], (formData) => editUser(formData), {
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(["getUser"]);
      onSuccess && onSuccess(data, variables, context);
    },
    onError: (data) => {
      alert(data.error);
    },
  });
};
