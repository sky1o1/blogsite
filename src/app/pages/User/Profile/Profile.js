import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Box,
  Button,
  TextField,
  Avatar,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useProfile } from "../../../hooks/component/useProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
    minHeight: "250px",
  },
  body: {
    height: "100%",
    width: "95%",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    minWidth: "350px",
    paddingBottom: "50px",
    paddingRight: "50px",
    paddingLeft: "50px",
    marginLeft: "35px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Profile() {
  const classes = useStyles();
  const {
    data,
    isLoading,
    formik,
    editMode,
    handleUpdate,
    handleSubmit,
    setEditMode,
    stringAvatar,
    // handleUpload,
  } = useProfile();

  useEffect(() => {
    if (data) {
      formik.setFieldValue("name", data.name);
      formik.setFieldValue("email", data.email);
    }
    /* eslint-disable */
  }, [data]);

  return isLoading ? (
    <div className="container">
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center">
        <Grid item xs={4} style={{ cursor: "pointer" }}>
          <Card className={classes.root} variant="outlined">
            <Box width={300} margin={0.5} my={5}>
              <Box pt={0.5}>
                <Skeleton />
              </Box>
              <Skeleton variant="rect" width={300} height={250} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div className="container">
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center">
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardHeader title="My Profile" />
            <CardContent style={{ display: "flex", justifyContent: "center" }}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12}>
                  {data && data?.photo ? (
                    <Avatar
                      alt={data?.name}
                      src={`https://ibriz-blog-site-backend.herokuapp.com/uploads/${data?.photo}`}
                      className={classes.large}
                    />
                  ) : (
                    <Avatar
                      style={{ cursor: "pointer" }}
                      {...stringAvatar(data && data?.name)}
                    />
                  )}
                </Grid>
              </Grid>
            </CardContent>

            <CardContent>
              {!editMode ? (
                <Typography variant="h6">{data.name}</Typography>
              ) : (
                <TextField
                  name="name"
                  label="Name"
                  size="small"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  onBlur={formik.handleBlur}
                  style={{ width: 250 }}
                />
              )}
            </CardContent>
            <CardContent>
              {!editMode ? (
                <Typography variant="h6">{data.email}</Typography>
              ) : (
                <TextField
                  name="email"
                  label="Email"
                  size="small"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  onBlur={formik.handleBlur}
                  style={{ width: 250 }}
                />
              )}
            </CardContent>
            <CardContent>
              {editMode ? (
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
                          onClick={handleSubmit}>
                          Save
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              ) : (
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUpdate}>
                      Edit Profile
                    </Button>
                  </Grid>
                  {/* <Grid iten xs={12}>
                    <input
                      type="file"
                      name="file"
                      onChange={(event) => {
                        handleUpload(event);
                      }}
                    />
                  </Grid> */}
                </Grid>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
