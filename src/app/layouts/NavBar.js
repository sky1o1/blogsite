import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Avatar,
  Grid,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useGetUser } from "../hooks/api/useUser";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const { data: userData } = useGetUser(
    localStorage.getItem("access_token") ? true : false
  );

  localStorage.setItem("id", userData?._id);
  localStorage.setItem("name", userData?.name);
  localStorage.setItem("email", userData?.email);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    history.push("/login");
  };

  function stringAvatar(name) {
    if (name) {
      return {
        children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
      };
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.navlinks}>
          <Link exact to="/" className={classes.link}>
            Home
          </Link>
          <div style={{ width: "100%" }}>
            <Link to="/my-blogs" className={classes.link}>
              My Blogs
            </Link>
          </div>
          <Grid container justify="flex-end">
            <Grid item xs={4}>
              <div className={classes.link}>
                <Avatar
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push("/profile")}
                  {...stringAvatar(userData && userData?.name)}
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              {userData ? (
                <div className={classes.link}>
                  <Typography
                    style={{ cursor: "pointer" }}
                    onClick={handleLogout}>
                    Logout
                  </Typography>
                </div>
              ) : (
                <Link to="/login" className={classes.link}>
                  Login
                </Link>
              )}
            </Grid>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
