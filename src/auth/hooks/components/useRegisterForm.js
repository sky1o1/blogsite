import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import registerValidationSchema from "../../components/validation-schema/registerValidationSchema";
import { useRegister } from "../api/useAuth";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function useRegisterForm() {
  const history = useHistory();
  const { mutate } = useRegister({});

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      mutate(values, {
        onSuccess: () => history.push("/login"),
      });
    },
    validationSchema: registerValidationSchema,
  });

  const handleSubmit = async () => {
    await formik.submitForm();
  };

  return {
    formik,
    handleSubmit,
  };
}
