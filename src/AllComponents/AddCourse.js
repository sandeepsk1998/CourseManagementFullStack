import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "./Api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Courses";
  }, []);

  const [course, setCourse] = useState({});

  ///Form handler

  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);

    e.preventDefault();
  };

  // Server Call to post the data

  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Courses added", { position: "bottom-center" });
        setCourse({})
      },

      (error) => {
        console.log(error);
        console.log("Error");
      //  toast.error("Something Went wrong", { position: "bottom-center" });
      }
    );
  };

  return (
    <div>
      <h1 className="text-center my-3">Fill the course details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id:</label>
          <Input
            type="text"
            placeholder="Enter the course here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">Course Title:</label>
          <Input
            type="text"
            placeholder="Enter the title here"
            name="title"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          ></Input>
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Description:</label>
          <Input
            type="text-area"
            placeholder="Enter the description here"
            name="description"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          ></Input>
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success mr-2">
            Add Course
          </Button>
          <Button
            type="reset"
            color="warning ml-2"
            // onClick={() => {
            //   setCourse({});
            // }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default AddCourse;
