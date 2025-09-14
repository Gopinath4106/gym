import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => {
  const services = [
    { title: "Personal Training", text: "One-on-one training with certified professionals." },
    { title: "Cardio Programs", text: "Boost stamina with structured cardio workouts." },
    { title: "Strength Training", text: "Build muscle with modern equipment and expert guidance." },
  ];

  return (
    <Container className="my-5" id="services">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;