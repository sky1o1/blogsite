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

const useStyles = makeStyles({
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
});

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
              <Avatar
                onClick={() => history.push("/profile")}
                {...stringAvatar(data && data?.name)}
              />
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdate}>
                  Edit Profile
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
