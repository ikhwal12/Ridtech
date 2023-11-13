import React from "react";
import Login from "./components/Login";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Dashboard/Home";
import Contact from "./components/Dashboard/Contact";
import About from "./components/Dashboard/About";
import Product from "./components/Dashboard/Product";
import Wishlist from "./components/Dashboard/Wishlist";

const RidTechApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/" element={<DashboardLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
};
export default RidTechApp;
