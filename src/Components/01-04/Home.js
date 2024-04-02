import React from "react";

import SearchBook from "./SearchBook";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h3 className="mb-3"> Welcome To Book Store!</h3>
      <SearchBook />
    </div>
  );
};

export default Home;
