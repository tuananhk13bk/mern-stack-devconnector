import React from "react";
import NavbarContainer from "../containers/NavbarContainer";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <NavbarContainer />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
