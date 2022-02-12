import { useState } from "react";
import { useGetUser, useUpdateProfile } from "../api/useUser";
import { useFormik } from "formik";
import updateValidationSchema from "../../../auth/components/validation-schema/updateValidationSchema";

const initialValues = {
  name: "",
  email: "",
};

export function useProfile() {
  const [editMode, setEditMode] = useState(false);
  const { data, isLoading } = useGetUser(true);
  const { mutate } = useUpdateProfile({});

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: () => setEditMode(false),
        onError: () => setEditMode(true),
      });
    },
    validationSchema: updateValidationSchema,
  });

  const handleSubmit = async () => {
    await formik.submitForm();
  };

  const handleUpdate = () => {
    setEditMode(true);
  };

  return {
    data,
    isLoading,
    formik,
    editMode,
    handleUpdate,
    handleSubmit,
    setEditMode,
  };
}
