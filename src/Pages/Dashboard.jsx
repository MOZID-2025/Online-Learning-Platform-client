import React, { useContext } from "react";
import { Link } from "react-router";

import Navbar from "../Components/Navbar";
import MyContainer from "../Components/MyContainer";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import { HashLoader } from "react-spinners";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <div>
      <MyContainer>
        <div>
          <Navbar></Navbar>
          <h2 className="text-center font-bold text-3xl pt-5">My Dashboard</h2>
        </div>

        {loading ? (
          <HashLoader />
        ) : user ? (
          <div className="text-center space-y-3 flex items-center gap-4">
            <div popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
              <img
                src={
                  user?.photoURL ||
                  `https://ui-avatars.com/api/?name=${
                    user?.displayName || "User"
                  }&background=random`
                }
                alt="User Photo"
                className="h-20 w-20 mx-auto"
              />
            </div>

            <div
              style={{
                positionAnchor: "--anchor-1",
              }}
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="">{user?.email}</p>
            </div>
          </div>
        ) : (
          <button>
            <Link
              to={"/signin"}
              className="btn btn-active btn-success text-white"
            >
              Signin
            </Link>
          </button>
        )}
        <div className="mb-10">
          <Link
            to={"/addNewCourse"}
            className="btn btn-active btn-success text-white"
          >
            Add New Course
          </Link>
        </div>
      </MyContainer>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
