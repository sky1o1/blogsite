import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { useBlogsForm } from "../../hooks/component/useBlogsForm";
import { ArrowBack } from "@material-ui/icons";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    height: "auto",
    width: "100%",
    borderRadius: "10px",
    minHeight: "250px",
  },
});

function BlogForm() {
  const history = useHistory();
  const classes = useStyles();
  const {
    formik,
    handleSubmit,
    openSuccessSnackBar,
    openErrorSnackBar,
    successMessage,
    errorMessage,
    handleCloseSnackbar,
  } = useBlogsForm();

  return (
    <>
      <Grid
        container
        alignItems="stretch"
        justifyContent="center"
        className="p-9"
        spacing={2}>
        <Grid item xs={12}>
          <Card className={classes.root} variant="outlined">
            <CardContent style={{ textAlign: "left" }}>
              <ArrowBack
                style={{ cursor: "pointer" }}
                onClick={() => history.goBack()}
              />
            </CardContent>
            <CardHeader title="Create Blog" />
            <CardContent style={{ textAlign: "justify" }}>
              <Grid style={{ marginLeft: 80 }} container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    inputProps={{ "data-testid": "title" }}
                    name="title"
                    label="Title"
                    size="small"
                    variant="outlined"
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.title && formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    onBlur={formik.handleBlur}
                    style={{ width: "90%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    rows={10}
                    inputProps={{ "data-testid": "description" }}
                    name="description"
                    label="Description"
                    size="small"
                    variant="outlined"
                    onChange={formik.handleChange}
                    error={Boolean(
                      formik.touched.description && formik.errors.description
                    )}
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                    onBlur={formik.handleBlur}
                    style={{ width: "90%" }}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardContent style={{ textAlign: "center" }}>
              <Grid style={{ textAlign: "right" }} spacing={2} container>
                <Grid item xs={12}>
                  <div className="m-2">
                    <Button
                      style={{ marginRight: 20 }}
                      variant="contained"
                      color="inherit"
                      onClick={() => history.goBack()}>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleSubmit}
                      disabled={!formik.isValid}>
                      Create
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Snackbar
                open={openSuccessSnackBar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}>
                <Alert
                  onClose={handleCloseSnackbar}
                  severity="success"
                  sx={{ width: "100%" }}>
                  {successMessage}
                </Alert>
              </Snackbar>

              <Snackbar
                open={openErrorSnackBar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}>
                <Alert
                  onClose={handleCloseSnackbar}
                  severity="error"
                  sx={{ width: "100%" }}>
                  {errorMessage}
                </Alert>
              </Snackbar>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default BlogForm;
