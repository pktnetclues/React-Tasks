import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3> Welcome To Book Store!</h3>
      <div className="d-flex gap-4">
        <Link to="/add">
          <button type="button" className="btn btn-primary">
            Add Book
          </button>
        </Link>
        <Link to="/listdata">
          <button type="button" className="btn btn-secondary">
            Books
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
