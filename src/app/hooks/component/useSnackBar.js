import { useState } from "react";

export function useSnackBar() {
  const [openSuccessSnackBar, setOpenSuccessSnackBar] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [openErrorSnackBar, setOpenErrorSnackBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSuccessSnackBar(false);
    setOpenErrorSnackBar(false);
  };

  return {
    openSuccessSnackBar,
    openErrorSnackBar,
    successMessage,
    errorMessage,
    handleCloseSnackbar,
    setOpenSuccessSnackBar,
    setSuccessMessage,
    setOpenErrorSnackBar,
    setErrorMessage,
  };
}
