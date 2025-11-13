import React from "react";
import { Link, Navigate } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <section className="flex flex-col items-center justify-center h-[80vh] text-center bg-gray-50 px-6">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="text-[100px] md:text-[150px] font-extrabold leading-none text-[#0FDC8D]">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mt-3 max-w-md mx-auto mb-10">
              The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
              to={"/"}
              className="mt-10 bg-[#0FDC8D] hover:bg-[#0e6b48] text-white font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
