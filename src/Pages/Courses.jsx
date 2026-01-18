import { useLoaderData } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";
import Footer from "../Components/Footer";

const Courses = () => {
  const data = useLoaderData();
  const [courses, setCourses] = useState([]);
  const [sort, setSort] = useState("");

  // keep original data
  useEffect(() => {
    setCourses(data);
  }, [data]);

  // handle sorting
  const handleSort = (value) => {
    setSort(value);

    let sortedCourses = [...courses];

    if (value === "low-high") {
      sortedCourses.sort((a, b) => a.price - b.price);
    }

    if (value === "high-low") {
      sortedCourses.sort((a, b) => b.price - a.price);
    }

    setCourses(sortedCourses);
  };

  return (
    <div>
      <MyContainer>
        <Navbar />

        {/* Header */}
        <div className="text-center font-bold py-6">
          <h2 className="text-3xl">All Courses</h2>
          <p>
            From beginner to advanced, find courses that suit your learning
            journey
          </p>
        </div>

        {/* 🔽 Sort Dropdown */}
        <div className="flex justify-end mb-6">
          <select
            value={sort}
            onChange={(e) => handleSort(e.target.value)}
            className="select select-bordered w-52"
          >
            <option value="">Sort by Price</option>
            <option value="low-high">Low → High</option>
            <option value="high-low">High → Low</option>
          </select>
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </MyContainer>

      <Footer />
    </div>
  );
};

export default Courses;
