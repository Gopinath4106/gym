import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5" id="about">
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="/static/img1.jpg"
            alt="Gym interior"
            className="about-img"
          />
        </Col>
        <Col md={6}>
          <img
            src="/static/img2.jpg"
            alt="Workout training"
            className="about-img"
          />
        </Col>
        <Col md={12} className="mt-4">
          <h2>About Us</h2>
          <p>
            At <strong>GymX</strong>, we believe fitness is not just about
            lifting weights, but building a healthier lifestyle. Our
            professional trainers and nutritionists provide personalized
            workouts and diet plans tailored just for you.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
