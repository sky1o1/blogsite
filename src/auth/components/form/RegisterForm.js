import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useRegisterForm } from "../../hooks/components/useRegisterForm";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  body: {
    height: "100%",
    width: "30%",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    minWidth: "350px",
  },
});

function RegisterForm() {
  const classes = useStyles();
  const { formik, handleSubmit } = useRegisterForm();

  return (
    <>
      <Card variant="outlined" className={classes.body}>
        <Grid container spacing={2}>
          <CardContent
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
              width: "100%",
            }}>
            <Typography variant="h5">Sign Up</Typography>
          </CardContent>
          <Grid item xs={12}>
            <TextField
              inputProps={{ "data-testid": "name" }}
              name="name"
              label="Name"
              size="small"
              variant="outlined"
              onChange={formik.handleChange}
              error={Boolean(formik.touched.name && formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              onBlur={formik.handleBlur}
              style={{ width: 250 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputProps={{ "data-testid": "email" }}
              name="email"
              label="Email"
              size="small"
              variant="outlined"
              onChange={formik.handleChange}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
              style={{ width: 250 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputProps={{ "data-testid": "password" }}
              name="password"
              label="Password"
              size="small"
              type="password"
              variant="outlined"
              onChange={formik.handleChange}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onBlur={formik.handleBlur}
              style={{ width: 250 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputProps={{ "data-testid": "confirmPassword" }}
              name="confirmPassword"
              label="Confirm Password"
              size="small"
              type="password"
              variant="outlined"
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )}
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              onBlur={formik.handleBlur}
              style={{ width: 250 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!formik.isValid}>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ marginBottom: 20 }}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#555" }}>
                Already have an account?
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default RegisterForm;
