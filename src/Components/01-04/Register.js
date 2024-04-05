import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
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
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          if (json_obj.message === "success") {
            setEmail("");
            setPassword("");
            setName("");
            setLoading(false);
            toast.success("Register Successful");
            navigate("/login");
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
    console.log(file);
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      toast.error(`File size should be less than ${MAX_FILE_SIZE_MB}MB`);
      return;
    } else if (!file.type == "image") {
      toast.error(`File should be of Image type only`);
    } else {
      setProfilePic(file);
    }
  };

  return (
    <div className="sign-in__wrapper">
      <Form
        name="form"
        className="shadow p-4 bg-white rounded"
        onSubmit={handleFormSubmit}
      >
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

        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Email"
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

        <Form.Group className="mb-2" controlId="cnfpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={cnfPassword}
            placeholder="Password"
            onChange={(e) => setCnfPassword(e.target.value)}
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

        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
