import React, { useContext, useState } from "react";
import MyContainer from "../Components/MyContainer";
import { Link, useNavigate } from "react-router";

import { toast } from "react-toastify";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {
  const [show, setShow] = useState(false);

  const {
    createUserWithEmailAndPasswordFunc,
    sendEmailVerificationFunc,
    updateProfileFunc,
    setLoading,
    signOutFunc,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value.trim();
    const password = e.target.password?.value.trim();

    console.log(displayName, photoURL);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!strongPasswordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    //create user

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        //update profile
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            console.log(res);
            //email verification
            sendEmailVerificationFunc()
              .then((res) => {
                console.log(res);
                setLoading(false);

                // signout
                signOutFunc().then(() => {
                  toast.success(
                    "Signup successful! Check your email to validate your account"
                  );
                  setUser(null);
                  navigate("/signin");
                });
              })
              .catch((e) => {
                toast.error(e.message);
              });
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e);
        console.log(e.code);
        if (e.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Please sign in instead."
          );
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please enter a valid email.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Email/password sign-in is currently disabled.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This account has been disabled. Contact support.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("No user found with this email. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (e.code === "auth/weak-password") {
          toast.error("Password is too weak. Use at least 6 characters.");
        } else if (e.code === "auth/missing-password") {
          toast.error("Please enter your password.");
        } else if (e.code === "auth/missing-email") {
          toast.error("Please enter your email address.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/popup-closed-by-user") {
          toast.error("Sign-in popup closed before completing. Try again.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Check your internet connection.");
        } else {
          toast.error(e.message || "Something went wrong. Please try again.");
        }
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#33946f] relative overflow-hidden">
        {/* Animated floating circles */}
        <div className="absolute inset-0">
          <div className="absolute w-72 h-72  rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72  rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
        </div>

        <MyContainer>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10">
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="text-5xl font-extrabold drop-shadow-lg">
                Create Your Account
              </h1>
              <p className="mt-4 text-lg  leading-relaxed">
                Join our community and unlock exclusive features. Your journey
                begins here!
              </p>
            </div>

            <div className="w-full max-w-md backdrop-blur-lg  border  shadow-2xl rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center ">
                Sign Up
              </h2>

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Write your name"
                    className="input input-bordered w-full bg-white/20  focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Photo
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Your photo URL here"
                    className="input input-bordered w-full bg-white/20   focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    className="input input-bordered w-full bg-white/20  focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full bg-white/20  focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                <button type="submit" className="btn my-btn">
                  Sign Up
                </button>

                <div className="text-center mt-3">
                  <p className="text-sm ">
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="text-[#0FDC8D] hover:text-white font-medium underline"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default SignUp;
