import React, { useContext } from "react";
import { Link } from "react-router";

import Navbar from "../Components/Navbar";
import MyContainer from "../Components/MyContainer";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import { HashLoader } from "react-spinners";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  const userInfo = user && (
    <div className="flex flex-col items-center gap-3 text-center">
      <img
        src={
          user.photoURL ||
          `https://ui-avatars.com/api/?name=${
            user.displayName || "User"
          }&background=random`
        }
        alt="User Photo"
        className="h-20 w-20 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold">{user.displayName}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );

  const actionButtons = (
    <div className="flex flex-wrap gap-4 mt-6 justify-center pb-20">
      <Link to={"/dashboard"} className="btn btn-active btn-success text-white">
        My Enrolled Courses
      </Link>
      <Link
        to={"/addNewCourse"}
        className="btn btn-active btn-success text-white"
      >
        Add Course
      </Link>
      <Link to={"/dashboard"} className="btn btn-active btn-success text-white">
        My Added Courses
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MyContainer>
        <header className="text-center py-5">
          <h1 className="text-3xl font-bold">My Dashboard</h1>
        </header>

        {loading ? (
          <div className="flex justify-center py-10">
            <HashLoader />
          </div>
        ) : user ? (
          <>
            {userInfo}
            {actionButtons}
          </>
        ) : (
          <div className="flex justify-center py-10">
            <Link
              to={"/signin"}
              className="btn btn-active btn-success text-white"
            >
              Sign In
            </Link>
          </div>
        )}
      </MyContainer>
      <Footer />
    </div>
  );
};

export default Dashboard;
