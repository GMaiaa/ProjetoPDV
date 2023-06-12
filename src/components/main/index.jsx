import React from "react";
import Header from "../header";
import SideBar from "../sidebar";
import "./index.css";

const Main = ({ children }) => {
  return (
    <div className="content">
      <SideBar />
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
