import { useState } from "react";
import { useGetUser, useUpdateProfile, useUploadFoto } from "../api/useUser";
import { useFormik } from "formik";
import updateValidationSchema from "../../../auth/components/validation-schema/updateValidationSchema";

const initialValues = {
  name: "",
  email: "",
};

export function useProfile() {
  const [editMode, setEditMode] = useState(false);
  const { data, isLoading } = useGetUser(true);
  const { mutate: uploadMutate } = useUploadFoto({});
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

  function stringAvatar(name) {
    if (name) {
      return {
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
      };
    }
  }

  const handleUpload = (e) => {
    uploadMutate(e.target.files[0]);
  };

  return {
    data,
    isLoading,
    formik,
    editMode,
    handleUpdate,
    handleSubmit,
    setEditMode,
    stringAvatar,
    handleUpload,
  };
}
