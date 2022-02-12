import * as Yup from "yup";

const blogValidationSchema = Yup.object({
  title: Yup.string().required("Please enter a title."),
  description: Yup.string()
    .max(1000, "Description must be under 1000 words")
    .required("Description is required"),
});

export default blogValidationSchema;
