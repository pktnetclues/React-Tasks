import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "sonner";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("profilePic", profilePic);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `http://localhost:4000/api/register/admin`, true);
    xhr.withCredentials = true;
    xhr.send(formData);
    xhr.onload = function () {
      if (xhr.readyState === 4) {
        console.log(xhr);
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          if (json_obj.message === "success") {
            setEmail("");
            setPassword("");
            setName("");
            setLoading(false);
            toast.success("Register Successful");
            // navigate("/listdata");
          } else {
            toast.error("There is an error");
            console.error(json_obj.message);
            setLoading(false);
          }
        } else if (xhr.status === 400) {
          toast.error(JSON.parse(xhr.responseText).message);
          setLoading(false);
          console.error(xhr.message);
        } else {
          setLoading(false);
          toast.error("Something went wrong, try again");
        }
      }
    };
    xhr.onerror = function () {
      console.error(xhr.statusText);
    };
  };

  const MAX_FILE_SIZE_MB = 1;
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      toast.error(`File size should be less than ${MAX_FILE_SIZE_MB}MB`);
      return;
    } else {
      setProfilePic(file);
    }
  };

  return (
    <div className="sign-in__wrapper">
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleFormSubmit}>
        <div className="h4 mb-2 text-center">Sign In</div>
        <Form.Group className="mb-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="profilePic">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            required
          />
        </Form.Group>

        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Register
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Registering...
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Register;
