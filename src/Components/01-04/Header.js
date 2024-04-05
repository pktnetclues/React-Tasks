import React, { useContext, useEffect } from "react";
import { Navbar, Container, Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import { profilePicURL } from "./Constants";
import { defaultProfilePic } from "./Constants";
import { toast } from "sonner";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser, getProfile } = useContext(UserContext);
  useEffect(() => {});

  const handleLogout = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:4000/api/logout/admin`, true);
    xhr.withCredentials = true;
    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          if (json_obj.message === "success") {
            setUser(null);
            localStorage.removeItem("authToken");
            getProfile();
            navigate("/login");
            toast.success("Logout Success");
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

  const authToken = localStorage.getItem("authToken");
  const profilePicPath = user ? user.profilePic : null;
  const profilePic = profilePicPath
    ? `${profilePicURL}/${profilePicPath}`
    : `${defaultProfilePic}`;

  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <Button variant="Link">Book Store</Button>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="d-flex gap-4">
            {authToken ? (
              <div className="d-flex justify-content-center align-items-center gap-4">
                <Link to="/add">
                  <Button variant="primary">Add Book</Button>
                </Link>
                <Link to="/listBooks">
                  <Button variant="secondary">Books</Button>
                </Link>
                <Link to="/profile">
                  <Image
                    src={profilePic}
                    alt="Profile"
                    roundedCircle
                    width="55"
                    height="50"
                  />
                </Link>
                <Button onClick={handleLogout} variant="secondary">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center gap-4">
                <Link to="/register">
                  <Button variant="secondary">Register</Button>
                </Link>
                <Link to="/login">
                  <Button variant="primary">Login</Button>
                </Link>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
