import React from "react";
import Header from "./AllComponents/Header";
import { Row, Col, Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Home from "./AllComponents/Home";
import Allcourses from "./AllComponents/Allcourses";
import AddCourse from "./AllComponents/AddCourse";
import Menus from "./AllComponents/Menus";
import UpdateCourse from "./AllComponents/UpdateCourse";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./AllComponents/About";
import Contact from "./AllComponents/Contact";

function App() {
  // const btnhand = () => {
  //   toast.success("this is message", { position: "top-center" });
  // };

  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-course" element={<Allcourses />} exact />
                <Route path="/updatecourse" element={<UpdateCourse />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="/contact" element={<Contact />} exact />

              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
