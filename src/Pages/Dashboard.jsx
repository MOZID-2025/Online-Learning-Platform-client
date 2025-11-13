import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import MyContainer from "../Components/MyContainer";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import { HashLoader } from "react-spinners";

const Dashboard = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = {
      title: e.target.title.value,
      image: e.target.image.value,
      price: e.target.price.value,
      duration: e.target.duration.value,
      category: e.target.category.value,
      description: e.target.description.value,
    };

    console.log(formdata);

    fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <MyContainer>
        <div>
          <Navbar></Navbar>
          <h2 className="text-center font-bold text-3xl pt-5">My Dashboard</h2>
        </div>

        {loading ? (
          <HashLoader />
        ) : user ? (
          <div className="text-center space-y-3 flex items-center gap-4">
            <button
              className=" btn-circle"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" }}
            >
              <img
                src={
                  user?.photoURL ||
                  `https://ui-avatars.com/api/?name=${
                    user?.displayName || "User"
                  }&background=random`
                }
                alt="User Photo"
                className="h-20 w-20 mx-auto"
              />
            </button>

            <div
              style={{
                positionAnchor: "--anchor-1",
              }}
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="">{user?.email}</p>
            </div>
          </div>
        ) : (
          <button>
            <Link
              to={"/signin"}
              className="btn btn-active btn-success text-white"
            >
              Signin
            </Link>
          </button>
        )}

        <div>
          <div className="min-h-screen flex items-center justify-center">
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
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
                  >
                    <option>Select Category</option>
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
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0FDC8D]"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button className="cursor-pointer w-full bg-[#0FDC8D] text-white font-semibold py-2 rounded-lg hover:bg-[#0FDC8D]">
                    Add Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MyContainer>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
