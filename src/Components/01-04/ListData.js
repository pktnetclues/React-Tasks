import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import DeleteBook from "./DeleteBook";
import UpdateBook from "./updateBook";

const ListData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks(currentPage);
  }, [currentPage]);

  const getBooks = (page) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://localhost:4000/api/getBooks?page=${page}&pageSize=3`,
      true
    );
    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          if (json_obj.message === "success") {
            setBooks(json_obj.books);
            setTotalPages(json_obj.totalPages);
          } else {
            console.error("Error message from server:", json_obj.message);
          }
        } else {
          console.error("Error status from server:", xhr.statusText);
        }
      }
    };
    xhr.onerror = function () {
      console.error("Network error occurred.");
    };
    xhr.send();
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pages = [];
  for (let number = 1; number <= totalPages; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="listdata mt-5">
      <h3>Books List</h3>
      {books.length > 0 ? (
        <>
          <div className="main table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Launched</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => {
                  return (
                    <tr key={book.book_id}>
                      <td>{book.title}</td>
                      <td>{book.description}</td>
                      <td>{book.published_year}</td>
                      <td>
                        <DeleteBook
                          id={book.book_id}
                          getBooks={getBooks}
                          currentPage={currentPage}
                        />
                      </td>
                      <td>
                        <UpdateBook
                          id={book.book_id}
                          p_title={book.title}
                          p_description={book.description}
                          p_published_year={book.published_year}
                          getBooks={getBooks}
                          currentPage={currentPage}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="d-flex gap-4">
            <Pagination size="lg">
              <Pagination.Prev
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              />
              {pages}
              <Pagination.Next
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </div>
        </>
      ) : (
        <h2> No Books</h2>
      )}
    </div>
  );
};

export default ListData;
