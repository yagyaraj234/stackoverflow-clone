import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-[30vh] flex">
        <SideBar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
