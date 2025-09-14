import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const memberships = [
  { type: "Basic", price: "$20/month", features: ["Gym Access", "1 Diet Plan"] },
  { type: "Pro", price: "$50/month", features: ["Gym + Classes", "Diet + Trainer"] },
  { type: "Elite", price: "$100/month", features: ["All Access", "Personal Trainer", "Custom Diet"] }
];

const Membership = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">Membership Plans</h2>
    <Row>
      {memberships.map((p, idx) => (
        <Col md={4} key={idx}>
          <Card className="shadow mb-3">
            <Card.Body>
              <Card.Title>{p.type}</Card.Title>
              <h4>{p.price}</h4>
              <ul>
                {p.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Membership;