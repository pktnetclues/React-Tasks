import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const searchBook = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken, navigate]);

  const handleSearch = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://localhost:4000/api/searchBooks?search=${search}`,
      true
    );
    xhr.withCredentials = true;
    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          if (json_obj.message === "success") {
            setBooks([]);
            setBooks(json_obj.books);
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

  return (
    <div className="container-form">
      <Form onSubmit={handleSearch} className="d-flex search-form">
        <Form.Control
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search Books"
          className="me-2"
          aria-label="Search"
        />
        <Button type="submit" variant="outline-success">
          Search
        </Button>
      </Form>
      {books.length > 0 ? (
        <div className="listdata mt-5">
          <h3>Books List</h3>
          <div className="main table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Launched</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => {
                  return (
                    <tr key={book.book_id}>
                      <td>{book.title}</td>
                      <td>{book.description}</td>
                      <td>{book.published_year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default searchBook;
