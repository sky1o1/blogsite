import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Please provide password.")
    .min(8, "Password is too short - should be 6 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export default loginValidationSchema;
