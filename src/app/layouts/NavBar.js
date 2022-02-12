import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useGetUser } from "../hooks/api/useUser";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
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
  const { data: userData } = useGetUser();

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

  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.navlinks}>
          <Link exact to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/my-blogs" className={classes.link}>
            My Blogs
          </Link>
          <Link to="/profile" className={classes.link}>
            Profile
          </Link>
          <div className={classes.link}>
            <Typography style={{ cursor: "pointer" }} onClick={handleLogout}>
              Logout
            </Typography>
          </div>
          {userData ? (
            <div className={classes.link}>
              <Typography style={{ cursor: "pointer" }} onClick={handleLogout}>
                Logout
              </Typography>
            </div>
          ) : (
            <div className={classes.link}>
              <Typography
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/login")}>
                Login
              </Typography>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
