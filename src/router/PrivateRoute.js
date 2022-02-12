import React from "react";
import { Route, Redirect } from "react-router-dom";

const isUserAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    return true;
  }
  return false;
};

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isUserAuthenticated()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
