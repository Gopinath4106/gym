import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button, Card, Form, Alert } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-dark text-light text-center py-5">
      <h1 className="hero-text">Welcome to GymX</h1>
      <p>Transform your body, mind, and lifestyle</p>
      <Button variant="warning" size="lg">Join Now</Button>
    </div>
  );
}

function About() {
  return (
    <Container className="my-5">
      <h2>About Us</h2>
      <p>GymX is your fitness destination with world-class trainers and modern equipment.</p>
    </Container>
  );
}

function Services() {
  return (
    <Container className="my-5">
      <h2>Our Services</h2>
      <div className="d-flex flex-wrap gap-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Personal Training</Card.Title>
            <Card.Text>One-on-one coaching with professional trainers.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Group Classes</Card.Title>
            <Card.Text>Yoga, Zumba, Crossfit and more!</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

function DietPlans() {
  return (
    <Container className="my-5">
      <h2>Diet Plans</h2>
      <ul className="list-group">
        <li className="list-group-item">Weight Loss Diet</li>
        <li className="list-group-item">Muscle Gain Diet</li>
        <li className="list-group-item">Balanced Nutrition</li>
      </ul>
    </Container>
  );
}

function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    let h = height / 100;
    let bmi = (weight / (h * h)).toFixed(2);
    let status = "";
    let suggestion = "";

    if (bmi < 18.5) {
      status = "Underweight";
      suggestion = "Eat high-calorie diet with proteins.";
    } else if (bmi < 25) {
      status = "Normal";
      suggestion = "Balanced diet and regular workouts.";
    } else if (bmi < 30) {
      status = "Overweight";
      suggestion = "Low-carb diet with cardio.";
    } else {
      status = "Obese";
      suggestion = "Strict diet with professional support.";
    }
    setResult({ bmi, status, suggestion });
  };

  return (
    <Container className="my-5 w-50" id="bmi">
      <h2>BMI Calculator</h2>
      <Form onSubmit={calculateBMI}>
        <Form.Control
          type="number"
          placeholder="Weight (kg)"
          className="mb-3"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <Form.Control
          type="number"
          placeholder="Height (cm)"
          className="mb-3"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <Button type="submit" variant="dark" className="w-100">Calculate</Button>
      </Form>
      {result && (
        <Alert variant="info" className="mt-3">
          <p><strong>BMI:</strong> {result.bmi}</p>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Suggested Diet:</strong> {result.suggestion}</p>
        </Alert>
      )}
    </Container>
  );
}

function Membership() {
  return (
    <Container className="my-5">
      <h2>Membership Plans</h2>
      <div className="d-flex flex-wrap gap-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Basic</Card.Title>
            <Card.Subtitle>₹999/month</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Premium</Card.Title>
            <Card.Subtitle>₹1999/month</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

function Contact() {
  return (
    <Container className="my-5">
      <h2>Contact Us</h2>
      <Form>
        <Form.Control type="text" placeholder="Name" className="mb-3" />
        <Form.Control type="email" placeholder="Email" className="mb-3" />
        <Form.Control as="textarea" rows={3} placeholder="Message" className="mb-3" />
        <Button variant="dark" className="w-100">Send</Button>
      </Form>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">🏋 GymX</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/diet">Diet</Nav.Link>
              <Nav.Link as={Link} to="/bmi">BMI Calculator</Nav.Link>
              <Nav.Link as={Link} to="/membership">Membership</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<><Hero /><About /><Services /><DietPlans /><Calculator /><Membership /><Contact /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/diet" element={<DietPlans />} />
        <Route path="/bmi" element={<Calculator />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
