import React, { useState } from "react";
import MyContainer from "../Components/MyContainer";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLoaderData } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCourse = () => {
  const data = useLoaderData();
  const course = data.result;
  const { title, image, price, duration, category, description, _id } = course;

  // Step 1: Create state for each input
  const [courseData, setCourseData] = useState({
    title,
    image,
    price,
    duration,
    category,
    description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/courses/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Course updated successfully!");

        // Step 2: Clear form fields
        setCourseData({
          title: "",
          image: "",
          price: "",
          duration: "",
          category: "",
          description: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update course!");
      });
  };

  return (
    <div>
      <MyContainer>
        <Navbar />
        <h2 className="text-center font-bold text-3xl pt-5">My Dashboard</h2>

        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
            <h2 className="text-3xl font-bold text-center text-[#0FDC8D] mb-8">
              Update Course
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="title"
                value={courseData.title}
                onChange={handleChange}
                placeholder="Enter course title"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="image"
                value={courseData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="number"
                name="price"
                value={courseData.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="duration"
                value={courseData.duration}
                onChange={handleChange}
                placeholder="Duration"
                className="w-full border rounded-lg px-3 py-2"
              />
              <select
                name="category"
                value={courseData.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option>Select Category</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Business</option>
              </select>
              <textarea
                name="description"
                value={courseData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Description"
                className="w-full border rounded-lg px-3 py-2"
              />

              <button
                type="submit"
                className="w-full bg-[#0FDC8D] text-white py-2 rounded-lg cursor-pointer"
              >
                Update Course
              </button>
            </form>
          </div>
        </div>
      </MyContainer>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default UpdateCourse;
