import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function Menus() {
  return (
    <div>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
      </ListGroup>

      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-course"
          action
        >
          Add Course
        </Link>
      </ListGroup>

      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-course"
          action
        >
          View Course
        </Link>
      </ListGroup>

      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          
          tag="a"
          to="/about"
          action
        >
          About
        </Link>
      </ListGroup>

      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/contact"
          action
        >
          Contact
        </Link>
      </ListGroup>
    </div>
  );
}

export default Menus;
