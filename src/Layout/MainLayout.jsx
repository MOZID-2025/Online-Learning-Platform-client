import React from "react";

import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default MainLayout;
