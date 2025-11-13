import React from "react";
import { Link, useLoaderData } from "react-router";

import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";
import {
  FaCheckCircle,
  FaClock,
  FaPencilAlt,
  FaTasks,
  FaThumbsUp,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";

const HomePage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="pb-10 bg-gray-100 pt-10">
        <MyContainer>
          <div className="text-center pb-8 ">
            <h2 className="text-5xl font-bold pb-5 text-green-500">
              Features Courses
            </h2>
            <p>
              Discover our featured courses designed to help you gain practical
              skills, advance your knowledge, and achieve your career goals
              efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {data.map((course) => (
              <CourseCard key={course._id} course={course}></CourseCard>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className=" ">
              <Link
                to={`/courses`}
                href="#"
                className="text-white bg-[#0e4732] hover:bg-[#137951] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                More Courses
              </Link>
            </button>
          </div>

          <div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10 pt-10 md:px-20 py-16 bg-white">
              {/* Left Content */}
              <div className="md:w-1/2 space-y-6">
                <p className="text-green-500 font-semibold text-sm">
                  Why Choose Us?
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Benefits of Learning <br /> from our institute
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  There cursus massa at urnaaculis estie. Sed aliquamellus vitae
                  ultrs condimentum leo massa mollis estiegittis miristum nulla
                  sed medy fringilla vitae.
                </p>

                {/* Highlighted Feature */}
                <div className="flex items-center gap-4 bg-transparent mt-6">
                  <div className="text-green-500 flex flex-col text-3xl">
                    <FaTasks />
                    <FaThumbsUp />
                    <FaPencilAlt />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Start learning from our experts and <br />
                    enhance your skills
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mt-6">
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-green-500" />
                    Making this the first true generator on the Internet
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-green-500" />
                    Lorem Ipsum is not simply random text
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-green-500" />
                    If you are going to use a passage
                  </li>
                </ul>
              </div>

              {/* Right Image Section */}
              <div className="md:w-1/2 relative">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg" // example image
                    alt="Learning environment"
                    className="rounded-lg w-full object-cover"
                  />
                  {/* Vertical Label */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-indigo-600 text-white font-semibold text-xs tracking-widest px-3 py-6 rounded-r-md rotate-[-90deg] origin-left">
                    TRUSTED BY 8800 CUSTOMERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MyContainer>
      </div>
      <div className="flex justify-center gap-50 py-10 bg-white pb-10">
        {/* Feature 1 */}
        <div className="flex items-start gap-3">
          <div className="bg-[#0e4732] p-3 rounded-full text-white">
            <FaVideo size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-2xl">
              30,000 online courses
            </h3>
            <p className=" text-gray-600">Enjoy a variety of fresh topics</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-3">
          <div className="bg-[#0e4732] p-3 rounded-full text-white">
            <FaUserFriends size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-2xl">
              Expert instruction
            </h3>
            <p className=" text-gray-600">Find the right instructor for you</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-3">
          <div className="bg-[#0e4732] p-3 rounded-full text-white">
            <FaClock size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-2xl">
              Lifetime access
            </h3>
            <p className="text-gray-600">Learn on your schedule</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
