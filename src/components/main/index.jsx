import React from "react";
import Header from "../header";
import SideBar from "../sidebar";
import "./index.css";

const Main = ({ children, page }) => {
  return (
    <div className="content">
      <SideBar page = { page } />
      <div className="content column">
        <Header />
        <div className="body">
        {children}
        </div>
      </div>
    </div>
  );
};

export default Main;
