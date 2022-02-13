import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import HomePage from "../app/pages/home_page/HomePage";
import Login from "../auth/pages/Login";
import SignUp from "../auth/pages/SignUp";
import UnauthorizedPage from "../app/unauthorized/UnauthorizedPage";
import PageLayout from "../app/layouts/PageLayout";
import MyBlogs from "../app/pages/my_blogs/MyBlogs";
import Profile from "../app/pages/User/Profile/Profile";
import BlogForm from "../app/components/form/BlogForm";
import BlogDetailPage from "../app/pages/detail_page/BlogDetailPage";

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PageLayout>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/unauthorized" component={UnauthorizedPage} />
          <PrivateRoute exact path="/my-blogs" component={MyBlogs} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/blog/create" component={BlogForm} />
          <PrivateRoute exact path="/blog-:id" component={BlogDetailPage} />
        </PageLayout>
      </Switch>
    </Router>
  );
};

export default AppRoute;
