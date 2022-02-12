import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import loginValidationSchema from "../../components/validation-schema/loginValidationSchema";
import { useLogin } from "../api/useAuth";

const initialValues = {
  email: "",
  password: "",
};

export function useLoginForm() {
  const history = useHistory();
  const { mutate } = useLogin({});

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: (val) => {
          localStorage.setItem("access_token", val);
          history.push("/");
        },
      });
    },
    validationSchema: loginValidationSchema,
  });

  const handleSubmit = async () => {
    await formik.submitForm();
  };

  return {
    formik,
    handleSubmit,
  };
}
