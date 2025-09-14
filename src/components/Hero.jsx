import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="bg-dark text-light text-center py-5">
      <Container>
        <h1 className="display-3 fw-bold">Welcome to GymX</h1>
        <p className="lead">Transform your body and mind with our expert trainers & diet plans</p>
        <Button variant="outline-light" size="lg" href="#membership">
          Join Now
        </Button>
      </Container>
    </div>
  );
};

export default Hero;