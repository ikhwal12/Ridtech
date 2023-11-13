import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/dashboard-style.css";
import Sidebar from "./Navbar";
const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
