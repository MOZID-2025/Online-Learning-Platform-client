import React from "react";
import { Link, useLoaderData } from "react-router";
import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaPencilAlt,
  FaTasks,
  FaThumbsUp,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import TopInstructors from "./TopInstructors";

const HomePage = () => {
  const data = useLoaderData();

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const categories = ["All", ...new Set(data.map((course) => course.category))];

  const filteredCourses = data.filter(
    (course) =>
      selectedCategory === "All" || course.category === selectedCategory
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="pb-10 pt-10">
        <MyContainer>
          {/* Header Section */}
          <div className="text-center pb-8">
            <h2 className="text-5xl font-bold pb-5 text-green-500 dark:text-green-400">
              Featured Courses
            </h2>
            <p>
              Discover our featured courses designed to help you gain practical
              skills, advance your knowledge, and achieve your career goals
              efficiently.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition
                    ${
                      selectedCategory === cat
                        ? "bg-green-500 text-white border-green-500"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-green-100 dark:hover:bg-green-700"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Courses */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course}></CourseCard>
            ))}
          </div>

          {/* More Courses Button */}
          <div className="flex justify-center mt-8">
            <Link
              to={`/courses`}
              className="text-white bg-[#0e4732] hover:bg-[#137951] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              More Courses
            </Link>
          </div>

          {/* Benefits Section */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10 pt-10 md:px-20 py-16 bg-white dark:bg-gray-800 rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Left */}
            <motion.div
              className="md:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-green-500 font-semibold text-xl">
                Why Choose Us?
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Benefits of Learning <br /> from our institute
              </h2>
              <p className="leading-relaxed">
                There cursus massa at urnaaculis estie. Sed aliquamellus vitae
                ultrs condimentum leo massa mollis estiegittis miristum nulla
                sed medy fringilla vitae.
              </p>

              <motion.div
                className="flex items-center gap-4 mt-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-green-500 flex flex-col text-3xl">
                  <FaTasks />
                  <FaThumbsUp />
                  <FaPencilAlt />
                </div>
                <h3 className="font-bold text-lg">
                  Start learning from our experts and <br />
                  enhance your skills
                </h3>
              </motion.div>

              <ul className="space-y-3 mt-6">
                {[
                  "Making this the first true generator on the Internet",
                  "Lorem Ipsum is not simply random text",
                  "If you are going to use a passage",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <FaCheckCircle className="text-green-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
                  alt="Learning environment"
                  className="rounded-lg w-full object-cover"
                />
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-indigo-600 text-white font-semibold text-xs tracking-widest px-3 py-6 rounded-r-md rotate-[-90deg] origin-left"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  TRUSTED BY 8800 CUSTOMERS
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <TopInstructors />
        </MyContainer>
      </div>
    </div>
  );
};

export default HomePage;
