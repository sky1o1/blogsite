import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useFormik } from "formik";
import { usePostBlog, useUpdateBlog, useDeleteBlog } from "../api/useBlogs";
import blogValidationSchema from "../../components/validation-schema/blogValidationSchema";
import { useSnackBar } from "./useSnackBar";

const initialValues = {
  title: "",
  description: "",
};

export function useBlogsForm() {
  const { params: { id } = {} } = useRouteMatch();
  const history = useHistory();
  const { mutate } = usePostBlog({});
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { mutate: mutateUpdate } = useUpdateBlog({});
  const { mutate: mutateDelete } = useDeleteBlog({});
  const [openDialog, setOpenDialog] = useState(false);

  const {
    openSuccessSnackBar,
    openErrorSnackBar,
    successMessage,
    errorMessage,
    handleCloseSnackbar,
    setOpenSuccessSnackBar,
    setSuccessMessage,
    setOpenErrorSnackBar,
    setErrorMessage,
  } = useSnackBar();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: (val) => {
          setOpenSuccessSnackBar(val.success);
          setSuccessMessage(val.message);
          history.push(`/blog-${val?.data?._id}`);
        },
        onError: (val) => {
          setOpenErrorSnackBar(true);
          setErrorMessage(val.message);
        },
      });
    },
    validationSchema: blogValidationSchema,
  });

  const handleSubmit = async () => {
    await formik.submitForm();
  };

  const updateFormik = useFormik({
    initialValues,
    onSubmit: (values) => {
      mutateUpdate(
        { id, formData: values },
        {
          onSuccess: (val) => {
            setEditMode(false);
            setOpenSuccessSnackBar(true);
            setSuccessMessage(val.message);
          },
          onError: (val) => {
            setOpenErrorSnackBar(true);
            setErrorMessage(val.message);
            setEditMode(true);
          },
        }
      );
    },
    validationSchema: blogValidationSchema,
  });

  const handleUpdate = async () => {
    await updateFormik.submitForm();
  };

  const handleDelete = () => {
    mutateDelete(id, {
      onSuccess: (val) => {
        history.goBack();
        setOpenSuccessSnackBar(true);
        setSuccessMessage(val.message);
      },
      onError: (val) => {
        setOpenErrorSnackBar(true);
        setErrorMessage(val.message);
      },
    });
  };

  return {
    formik,
    handleSubmit,
    updateFormik,
    handleUpdate,
    handleDelete,
    open,
    handleOpen,
    handleClose,
    openDialog,
    handleOpenDialog,
    handleCloseDialog,
    editMode,
    setEditMode,
    openSuccessSnackBar,
    openErrorSnackBar,
    successMessage,
    errorMessage,
    handleCloseSnackbar,
  };
}
