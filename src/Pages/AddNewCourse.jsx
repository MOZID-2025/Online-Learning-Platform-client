import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Context/AuthContext";

const AddNewCourse = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = {
      title: e.target.title.value,
      image: e.target.image.value,
      price: e.target.price.value,
      duration: e.target.duration.value,
      category: e.target.category.value,
      description: e.target.description.value,
      email: user.email,
    };

    fetch("https://online-learning-platform-server-ten.vercel.app/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("✅ Successfully added a new course!");
        e.target.reset();
        console.log(data);
      })
      .catch((err) => {
        toast.error("❌ Failed to add course. Try again!");
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center text-[#0FDC8D] mb-8">
            Add New Course
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Course Title
              </label>
              <input
                name="title"
                type="text"
                placeholder="Enter course title"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Image URL
              </label>
              <input
                name="image"
                type="text"
                placeholder="https://example.com/course.jpg"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Price ($)
              </label>
              <input
                name="price"
                type="number"
                placeholder="Enter course price"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Duration
              </label>
              <input
                name="duration"
                type="text"
                placeholder="e.g. 4 weeks, 10 hours"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <select
                name="category"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
              >
                <option value="">Select Category</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Business</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                placeholder="Write course description..."
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="cursor-pointer w-full bg-[#0FDC8D] text-white font-semibold py-2 rounded-lg hover:bg-[#0FCF75] transition-colors duration-300"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AddNewCourse;
