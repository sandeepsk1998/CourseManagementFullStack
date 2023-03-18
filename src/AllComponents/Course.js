import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import base_url from "./Api/bootapi";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";

function Course({ course, update }) {
  // Delete Course
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course Deleted");
        update(id);
      },
      (error) => {
        toast.error("Courses not deleted");
      }
    );
  };

  

  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle className="font-weight-bold text-center">
            {course.title}
          </CardSubtitle>
          <CardText>{course.description}</CardText>
          <Container className="text-center">
            <Link className="btn btn-primary mx-2" to="/updatecourse">
              Update
            </Link>
            <Button
              onClick={() => {
                deleteCourse(course.id);
              }}
            >
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}

export default Course;
