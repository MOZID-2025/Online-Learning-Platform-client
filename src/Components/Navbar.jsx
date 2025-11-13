import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import logo from "../assets/logo.jpg";
import { HashLoader } from "react-spinners";
// import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutFunc, setUser, loading } = useContext(AuthContext);
  console.log(user);

  //signout
  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const link = (
    <>
      <li className="bg-[rgba(15,220,141,0.1)] font-bold mr-5 rounded-1xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#0FDC8D]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="bg-[rgba(15,220,141,0.1)] font-bold mr-5 rounded-1xl">
        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? "text-[#0FDC8D]" : "")}
        >
          All Courses
        </NavLink>
      </li>
      {user && (
        <li className="bg-[rgba(15,220,141,0.1)] font-bold">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-[#0FDC8D] rounded-1xl" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  console.log(loading);
  return (
    <div>
      <MyContainer>
        <div className="navbar  border-b border-gray-200 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <Link to="/" className="">
              <img className="w-25 h-15" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end">
            {loading ? (
              <HashLoader />
            ) : user ? (
              <div className="text-center space-y-3 flex items-center gap-4">
                <button
                  className=" btn-circle"
                  popoverTarget="popover-1"
                  style={{ anchorName: "--anchor-1" }}
                >
                  <img
                    src={
                      user?.photoURL ||
                      `https://ui-avatars.com/api/?name=${
                        user?.displayName || "User"
                      }&background=random`
                    }
                    alt="User Photo"
                    className="h-15 w-15 rounded-full mx-auto"
                  />
                </button>

                <div
                  className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                  popover="auto"
                  id="popover-1"
                  style={{
                    positionAnchor: "--anchor-1",
                  }}
                >
                  <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                  <p className="">{user?.email}</p>
                  <button className="my-btn" onClick={handleSignOut}>
                    Signout
                  </button>
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
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
