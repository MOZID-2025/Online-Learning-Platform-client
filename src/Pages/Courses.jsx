import { useLoaderData } from "react-router";
import Navbar from "../Components/Navbar";
import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <MyContainer>
      <div className="">
        <Navbar></Navbar>
        <div>
          <div className="text-center font-bold py-6">
            <h2 className="text-3xl">All course</h2>
            <p>Explore courses</p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((course) => (
              <CourseCard key={course._id} course={course}></CourseCard>
            ))}
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Courses;
