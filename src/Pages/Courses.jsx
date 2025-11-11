import { useLoaderData } from "react-router";
import Navbar from "../Components/Navbar";
import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";
import Footer from "../Components/Footer";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="">
      <MyContainer>
        <div className="">
          <Navbar></Navbar>
          <div className="mb-10">
            <div className="text-center font-bold py-6">
              <h2 className="text-3xl">All course</h2>
              <p>
                From beginner to advanced, find courses that suit your learning
                journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {data.map((course) => (
                <CourseCard key={course._id} course={course}></CourseCard>
              ))}
            </div>
          </div>
        </div>
      </MyContainer>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
