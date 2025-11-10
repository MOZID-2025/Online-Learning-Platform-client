import React from "react";
import heroimg from "../assets/home-image.png";
import MyContainer from "./MyContainer";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(to right bottom, #fff, #fef2f2)",
          }}
        ></div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-100 rounded-full opacity-70 blur-3xl z-0 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-10 pb-24 md:pt-18 lg:pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="text-gray-900 block">Better Learning</span>
                <span className="text-green-500 block">Future Starts</span>
                <span className="text-gray-900 block">With Edusion</span>
              </h1>

              <p className="mt-6 text-lg text-gray-500 max-w-md mx-auto lg:mx-0">
                It is a long established fact that reader will be distracted
                readable content of a page when.
              </p>

              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-green-500 transition duration-150 ease-in-out group"
                >
                  Explore Courses
                  <svg
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end relative h-[500px] md:h-[600px] lg:h-[700px]">
              {" "}
              <div className="relative w-full h-full max-w-lg lg:max-w-none">
                {" "}
                <img
                  src={heroimg}
                  alt="Smiling student sitting with books"
                  className="absolute bottom-0 right-0 w-full h-[500px] md:h-[600px] lg:h-[700px] object-contain object-bottom relative z-10" /* Adjusted size and positioning */
                  style={{
                    maxWidth: "none",
                    width: "100%",
                    height: "auto",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "-10%",
                  }}
                />
                <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-[#FFCFC8] rounded-full opacity-60 z-0"></div>
                <div className="absolute right-0 top-16 w-36 p-3 bg-white shadow-xl rounded-lg border border-gray-200 z-20">
                  {" "}
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.523-.086-1.058-.293-1.558L15 14H9l-1.707 3.442C7.086 17.942 7 18.477 7 19v2h10m0-2h10"
                      ></path>
                    </svg>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">4500+</p>
                      <p className="text-xs text-gray-500">Online Courses</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-36 p-3 bg-white shadow-xl rounded-lg border border-gray-200 z-20">
                  {" "}
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">7500+</p>
                      <p className="text-xs text-gray-500">Active Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default HeroSection;
