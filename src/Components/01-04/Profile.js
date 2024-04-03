import React, { useContext } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { UserContext } from "./Context/UserContext";
import { profilePicURL } from "./Constants";

const Profile = () => {
  const { user } = useContext(UserContext);

  const profilePicPath = user ? user.profilePic : null;
  const profilePic = profilePicPath
    ? `${profilePicURL}/${profilePicPath}`
    : "https://via.placeholder.com/150";

  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col>
          <Image
            src={profilePic}
            alt="Profile"
            height={150}
            width={150}
            rounded
            fluid
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8}>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
