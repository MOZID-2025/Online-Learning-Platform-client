import React from "react";
import { useLoaderData } from "react-router";

import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";

const HomePage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="pb-10">
      <MyContainer>
        <div className="text-center pb-8 ">
          <h2 className="text-4xl font-bold pb-5">Features Courses</h2>
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
      </MyContainer>
    </div>
  );
};

export default HomePage;
