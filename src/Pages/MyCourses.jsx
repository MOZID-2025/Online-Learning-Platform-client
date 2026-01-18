import React, { useContext, useEffect, useState } from "react";
import MyContainer from "../Components/MyContainer";
import Navbar from "../Components/Navbar";
import CourseCard from "../Components/CourseCard";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";

const MyCourses = () => {
  const { user, loading } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://online-learning-platform-server-ten.vercel.app/my-courses?email=${user.email}`
    )
      .then((res) => res.json())
      .then((courses) => {
        console.log("MY COURSES 👉", courses);
        setData(courses);
        setPageLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setPageLoading(false);
      });
  }, [user]);

  if (loading || pageLoading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading your courses...
      </div>
    );
  }

  return (
    <div>
      <MyContainer>
        <Navbar />

        <div className="mb-10">
          <div className="text-center font-bold py-6">
            <h2 className="text-3xl">My Courses</h2>
            <p>
              From beginner to advanced, find courses that suit your learning
              journey
            </p>
          </div>

          {data.length === 0 ? (
            <p className="text-center text-gray-500">
              You have no courses yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {data.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          )}
        </div>
      </MyContainer>

      <Footer />
    </div>
  );
};

export default MyCourses;
