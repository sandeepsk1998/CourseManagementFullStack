import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "./Api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {
  useEffect(() => {
    document.title = "All Courses";
  }, []);

  //Function to call server
  const getAllCoursesfromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        setCourse(response.data);
        toast.success("Course loaded", {
          position: "bottom-center",
        });
      },
      (error) => {
        console.log(error);
        toast.error("Wrong", { position: "bottom-center" });
      }
    );
  };

  useEffect(() => {
    getAllCoursesfromServer();
  }, []);
  const [courses, setCourse] = useState([]);

  const updateCourses = (id) => {
    setCourse(courses.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p> List of courses are</p>
      {courses.length > 0
        ? courses.map((item) => {
            return (
              <Course key={item.id} course={item} update={updateCourses} />
            );
          })
        : "No Courses"}
    </div>
  );
};

export default Allcourses;
