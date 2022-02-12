import { useMutation } from "react-query";
import { login, register } from "../../api/auth";

export const useLogin = ({ onSuccess }) => {
  return useMutation(["postLogin"], (formData) => login(formData), {
    onSuccess: (data, variables, context) => {
      onSuccess && onSuccess(data, variables, context);
    },
    onError: () => alert("Invalid Credentials"),
  });
};

export const useRegister = ({ onSuccess }) => {
  return useMutation(["postRegister"], (formData) => register(formData), {
    onSuccess: (data, variables, context) => {
      onSuccess && onSuccess(data, variables, context);
    },
    onError: () => alert("There was an error in sign up. Please try again."),
  });
};
