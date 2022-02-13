import React, { useEffect } from "react";
import moment from "moment";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardHeader,
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useGetBlogsById } from "../../hooks/api/useBlogs";
import Skeleton from "@material-ui/lab/Skeleton";
import { ArrowBack, Delete, Edit } from "@material-ui/icons";
import { useBlogsForm } from "../../hooks/component/useBlogsForm";
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
  body: {
    height: "100%",
    width: "100%",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    minWidth: "350px",
  },
});

function BlogDetailPage() {
  const history = useHistory();
  const classes = useStyles();

  const { params: { id } = {} } = useRouteMatch();
  const { data, isLoading } = useGetBlogsById(id);

  const {
    updateFormik,
    openDialog,
    handleOpenDialog,
    handleCloseDialog,
    handleUpdate,
    handleDelete,
    editMode,
    setEditMode,
    openSuccessSnackBar,
    openErrorSnackBar,
    successMessage,
    errorMessage,
    handleCloseSnackbar,
  } = useBlogsForm();

  useEffect(() => {
    if (data) {
      updateFormik.setFieldValue("title", data.title);
      updateFormik.setFieldValue("description", data.description);
    }
    /* eslint-disable */
  }, [data]);

  return isLoading ? (
    <Grid
      container
      alignItems="stretch"
      justifyContent="center"
      className="p-9"
      spacing={2}>
      <Grid item xs={12}>
        <Card variant="outlined" className={classes.body}>
          <Grid justifyContent="center" container spacing={2}>
            <Grid item xs={4}>
              <Box width={500} marginRight={0.5} my={5}>
                <Box pt={0.5}>
                  <Skeleton />
                </Box>
                <Skeleton variant="rect" width={500} height={300} />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  ) : (
    <Grid
      container
      alignItems="stretch"
      justifyContent="center"
      className="p-9"
      spacing={2}>
      <Grid style={{ textAlign: "left" }} item xs={12}>
        <ArrowBack
          style={{ cursor: "pointer" }}
          onClick={() => history.goBack()}
        />
      </Grid>

      <Grid item xs={12}>
        <Card
          className={classes.root}
          style={{
            borderWidth: "2px",
            borderColor: "#000",
            boxShadow: "4px 4px #2C3539",
          }}>
          <Grid style={{ textAlign: "right" }} spacing={2} container>
            <Grid item xs={12}>
              {localStorage.getItem("id") === data?.user?._id && !editMode && (
                <>
                  <Edit
                    className="mr-2 mt-2"
                    color="primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => setEditMode(true)}
                  />
                  <Delete
                    className="mr-3 mt-2"
                    color="secondary"
                    style={{ cursor: "pointer" }}
                    onClick={handleOpenDialog}
                  />
                </>
              )}
            </Grid>
          </Grid>
          {editMode ? (
            <div className="mb-2 mt-4">
              <TextField
                name="title"
                size="small"
                variant="outlined"
                onChange={updateFormik.handleChange}
                value={updateFormik.values.title}
                error={Boolean(
                  updateFormik.touched.title && updateFormik.errors.title
                )}
                helperText={
                  updateFormik.touched.title && updateFormik.errors.title
                }
                onBlur={updateFormik.handleBlur}
                style={{ width: "90%" }}
              />
            </div>
          ) : (
            <CardHeader title={data.title} />
          )}

          {editMode ? (
            <TextField
              multiline
              rows={10}
              name="description"
              size="small"
              variant="outlined"
              onChange={updateFormik.handleChange}
              value={updateFormik.values.description}
              error={Boolean(
                updateFormik.touched.description &&
                  updateFormik.errors.description
              )}
              helperText={
                updateFormik.touched.description &&
                updateFormik.errors.description
              }
              onBlur={updateFormik.handleBlur}
              style={{ width: "90%" }}
            />
          ) : (
            <CardContent style={{ textAlign: "justify" }}>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.description}
              </Typography>
            </CardContent>
          )}
          {!editMode && (
            <CardContent style={{ textAlign: "right" }}>
              <Typography>
                -{moment(data.createdAt).format("MMM Do YY")}
              </Typography>
              <Typography onClick={() => history.push(`/profile/${data?._id}`)}>
                -{data.user.name}
              </Typography>
            </CardContent>
          )}
          {editMode && (
            <CardContent style={{ textAlign: "center" }}>
              <Grid style={{ textAlign: "right" }} spacing={2} container>
                <Grid item xs={12}>
                  <div className="m-2">
                    <Button
                      style={{ marginRight: 20 }}
                      color="secondary"
                      variant="contained"
                      onClick={() => setEditMode(false)}>
                      Cancel
                    </Button>
                    <Button
                      style={{ marginRight: 20 }}
                      color="primary"
                      variant="contained"
                      onClick={handleUpdate}>
                      Save
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          )}
          <Snackbar
            open={openSuccessSnackBar}
            autoHideDuration={3000}
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
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}>
            <Alert
              onClose={handleCloseSnackbar}
              severity="error"
              sx={{ width: "100%" }}>
              {errorMessage}
            </Alert>
          </Snackbar>
        </Card>
      </Grid>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this blog??"}
        </DialogTitle>

        <DialogActions>
          <Button variant="outlined" onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleDelete}
            autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default BlogDetailPage;
