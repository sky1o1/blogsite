import React from "react";
import NavBar from "./NavBar";

const PageLayout = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default PageLayout;
