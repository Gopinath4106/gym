import React from "react";
import { Accordion, Container, Row, Col, Image } from "react-bootstrap";

const WorkoutPlans = () => (
  <Container className="my-5" id="workouts">
    <h2 className="text-center mb-4">Workout Plans</h2>

    <h4 className="mt-4">🔥 4-Day Split</h4>
    <Accordion defaultActiveKey="0" flush>
      {/* Day 1 – Chest */}
      <Accordion.Item eventKey="0">
        <Accordion.Header>Day 1 – Chest</Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col md={6}>
              <ul>
                <li>Bench Press (flat/incline) – 4×8–10</li>
                <li>Dumbbell Flys – 3×10–12</li>
                <li>Push-ups / Dips – 3×15</li>
              </ul>
            </Col>
            <Col md={6}>
              <Image className="workout-image" src="/static/chest.png" alt="Chest workout" fluid />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

      {/* Day 2 – Legs */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>Day 2 – Legs</Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col md={6}>
              <ul>
                <li>Squats – 4×8–10</li>
                <li>Romanian Deadlifts – 3×10</li>
                <li>Lunges / Leg Press – 3×12</li>
                <li>Calf Raises – 4×15–20</li>
              </ul>
            </Col>
            <Col md={6}>
              <Image className="workout-image" src="/static/legs.png" alt="Leg workout" fluid />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

      {/* Day 3 – Biceps */}
      <Accordion.Item eventKey="2">
        <Accordion.Header>Day 3 – Biceps</Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col md={6}>
              <ul>
                <li>Barbell Curl – 4×8–10</li>
                <li>Incline Dumbbell Curl – 3×10–12</li>
                <li>Hammer Curl – 3×12</li>
              </ul>
            </Col>
            <Col md={6}>
              <Image className="workout-image" src="/static/biceps.png" alt="Biceps workout" fluid />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

      {/* Day 4 – Triceps */}
      <Accordion.Item eventKey="3">
        <Accordion.Header>Day 4 – Triceps</Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col md={6}>
              <ul>
                <li>Close-Grip Bench Press – 4×8–10</li>
                <li>Skull Crushers – 3×10</li>
                <li>Overhead Dumbbell Extension – 3×12</li>
                <li>Tricep Pushdowns – 3×12–15</li>
              </ul>
            </Col>
            <Col md={6}>
              <Image className="workout-image" src="/static/triceps.png" alt="Triceps workout" fluid />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <h4 className="mt-5">⚡ 3-Day Split (Compact)</h4>
    <ul>
      <li><strong>Day 1:</strong> Chest + Triceps</li>
      <li><strong>Day 2:</strong> Legs</li>
      <li><strong>Day 3:</strong> Biceps + Core</li>
    </ul>

    <h4 className="mt-5">🏋️ 5-Day Split (More Volume)</h4>
    <ul>
      <li><strong>Day 1:</strong> Chest</li>
      <li><strong>Day 2:</strong> Legs</li>
      <li><strong>Day 3:</strong> Biceps</li>
      <li><strong>Day 4:</strong> Triceps</li>
      <li><strong>Day 5:</strong> Chest + Arms (pump focus, lighter weights)</li>
    </ul>
  </Container>
);

export default WorkoutPlans;
