import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  console.log(cookies);
  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <Button variant="Link">Book Store</Button>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="d-flex gap-4">
            {cookies.length > 0 ? (
              <>
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

                <button
                  onClick={handleLogout}
                  type="button"
                  className="btn btn-secondary"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
