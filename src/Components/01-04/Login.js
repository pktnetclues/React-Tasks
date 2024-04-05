import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { UserContext } from "./Context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { getProfile } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const formsendData = {
    email: email,
    password: password,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `http://localhost:4000/api/login/admin`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(formsendData));
    xhr.onload = function () {
      if (xhr.readyState === 4) {
        console.log(xhr);
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          if (json_obj.message === "success") {
            setEmail("");
            setPassword("");
            setLoading(false);
            localStorage.setItem("authToken", json_obj.token);
            toast.success("Login Successfull");
            getProfile();
            navigate("/listBooks");
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
          toast.error("Something went wrong try again");
        }
      }
    };
    xhr.onerror = function () {
      toast.error("Something Wrong in Backend");
      setLoading(false);
      console.error(xhr.statusText);
    };
  };

  return (
    <div className="sign-in__wrapper">
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleFormSubmit}>
        <div className="h4 mb-2 text-center">Sign In</div>

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
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

        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Login;
