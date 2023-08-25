import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import JobSection from "./JobSection";
import Question from "../pages/Question";
const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="min-h-[30vh] flex  border-b border-darkgray relative">
        <SideBar />
        {/* {children} */}
        <Question />
        <JobSection />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
