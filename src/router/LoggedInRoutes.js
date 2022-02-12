import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "../app/pages/User/Profile/Profile";
import BlogDetailPage from "../app/pages/detail_page/BlogDetailPage";
import BlogForm from "../app/components/form/BlogForm";
import MyBlogs from "../app/pages/my_blogs/MyBlogs";

const LoggedInRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/my-blogs" component={MyBlogs} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/blog/create" component={BlogForm} />
        <Route exact path="/blog-:id" component={BlogDetailPage} />
      </Switch>
    </Router>
  );
};

export default LoggedInRoutes;
