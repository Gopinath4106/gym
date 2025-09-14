import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import '../'

const plans = [
  { title: "Weight Loss Plan", description: "Low carb diet with cardio routine", img: "/static/diet1.jpg" },
  { title: "Muscle Gain Plan", description: "High protein meals + strength training", img: "/static/diet2.jpg" },
  { title: "Balanced Plan", description: "Mix of protein, carbs, and fat", img: "/static/diet3.jpg" }
];
const DietPlans = () => (
  <Container className="my-5 diet-grid">
    <h2 className="text-center mb-4">Diet Plans</h2>
    <Row>
      {plans.map((plan, idx) => (
        <Col md={4} key={idx}>
          <Card className="mb-3 shadow">
            <Card.Img className="diet-img" variant="top" src={plan.img} alt={plan.title} />
            <Card.Body>
              <Card.Title>{plan.title}</Card.Title>
              <Card.Text>{plan.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default DietPlans;
