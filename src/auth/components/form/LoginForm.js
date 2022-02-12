import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useLoginForm } from "../../hooks/components/useLoginForm";

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

function LoginForm() {
  const classes = useStyles();
  const { formik, handleSubmit } = useLoginForm();

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
            <Typography variant="h5">Login</Typography>
          </CardContent>
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
              data-testid="password"
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!formik.isValid}>
              Login
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography style={{ marginBottom: 20 }}>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "#555" }}>
                Don't have an account?
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default LoginForm;
