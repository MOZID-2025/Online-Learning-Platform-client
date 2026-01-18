import React, { useContext, useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import MyContainer from "../Components/MyContainer";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";

const MyEnrollCourse = () => {
  const { user, loading } = useContext(AuthContext);
  const [enrolls, setEnrolls] = useState([]);

  useEffect(() => {
    if (!user) return;

    console.log("loged user email", user.email);

    fetch(
      `https://online-learning-platform-server-ten.vercel.app/my-enroll-courses?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setEnrolls(data))
      .catch((err) => console.log(err));
  }, [user]);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div>
      <MyContainer>
        <Navbar />

        <h2 className="text-3xl font-bold text-center my-10">
          My Enrolled Courses
        </h2>

        {enrolls.length === 0 ? (
          <p className="text-center">No enrolled course</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 pb-10">
            {enrolls.map((course) => (
              <div key={course._id} className="border rounded p-4 shadow">
                <img
                  src={course.image}
                  alt=""
                  className="h-40 w-full object-cover"
                />
                <h3 className="text-xl font-bold mt-3">{course.title}</h3>
                <p>Price: ${course.price}</p>
                <p>Category: {course.category}</p>
                <p>Duration: {course.duration}</p>
                <p>Description: {course.description}</p>
              </div>
            ))}
          </div>
        )}
      </MyContainer>

      <Footer />
    </div>
  );
};

export default MyEnrollCourse;
