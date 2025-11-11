import React from "react";
import Navbar from "../Components/Navbar";
import { Link, useLoaderData, useNavigate } from "react-router";
import MyContainer from "../Components/MyContainer";
import Footer from "../Components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const data = useLoaderData();
  const course = data.result;
  const { title, image, price, duration, category, description, _id } = course;

  const navigate = useNavigate();

  const handleEnroll = () => {
    toast.success("You have successfully enrolled in the course!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/courses/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/courses");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <MyContainer>
        <Navbar />
      </MyContainer>

      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-cyan-200 opacity-70">
          <svg className="w-20 h-20" viewBox="0 0 80 80" fill="currentColor">
            <circle
              cx="40"
              cy="40"
              r="30"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="40" cy="40" r="10" fill="currentColor" />
            <path d="M40 10 L40 30" stroke="currentColor" strokeWidth="3" />
            <path d="M70 40 L50 40" stroke="currentColor" strokeWidth="3" />
            <path d="M40 70 L40 50" stroke="currentColor" strokeWidth="3" />
            <path d="M10 40 L30 40" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight">
            {title}
          </h1>
        </div>
      </div>

      <MyContainer>
        <div className="flex gap-5 pt-10 pb-10">
          <div>
            <img className="w-200 h-120" src={image} alt="Course-Images" />
          </div>

          <div>
            <h2 className="text-4xl mb-5 font-bold">{title}</h2>
            <p className="bg-[#CEF7FE] rounded-2xl text-center px-3 w-fit">
              {category}
            </p>
            <h2 className="text-3xl font-bold mt-5">Price: $ {price}</h2>
            <h3 className="text-2xl font-bold mt-5">
              Course Duration: {duration}
            </h3>
            <p className="mt-5">Description: {description}</p>

            <button
              className="btn btn-success text-white mt-5 mr-5"
              onClick={handleEnroll}
            >
              Enroll Course
            </button>

            <Link
              to={`/update-course/${_id}`}
              className="btn btn-primary mt-5 mr-5"
            >
              Edit
            </Link>
            <button onClick={handleDelete} className="btn btn-error mt-5">
              Remove
            </button>
          </div>
        </div>
      </MyContainer>

      <Footer />

      <ToastContainer />
    </div>
  );
};

export default CourseDetails;
