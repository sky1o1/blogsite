import { useQuery, useMutation, useQueryClient } from "react-query";
import { getUser, editUser, uploadFoto } from "../../api/user";

export const useGetUser = (val) => {
  return useQuery(["getUser"], () => getUser(), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    enabled: val,
  });
};

export const useUpdateProfile = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["updateProfile"],
    ({ formData }) => editUser({ formData }),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(["getUser"]);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: (data) => {
        alert(data.error);
      },
    }
  );
};

export const useUploadFoto = ({ onSuccess }) => {
  const userId = localStorage.getItem("id");
  const queryClient = useQueryClient();
  return useMutation(
    ["uploadFoto"],
    (formData) => uploadFoto(formData, userId),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(["getUser"]);
        onSuccess && onSuccess(data, variables, context);
      },
      onError: () => {
        alert("There was a problem uploding file");
      },
    }
  );
};
