import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    let h = height / 100; // convert cm to meters
    let bmi = (weight / (h * h)).toFixed(2);

    let category = "";
    let suggestion = "";

    if (bmi < 18.5) {
      category = "Underweight";
      suggestion = "High-calorie diet with more protein and carbs.";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal";
      suggestion = "Balanced diet with all nutrients.";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      suggestion = "Low-carb diet with regular cardio.";
    } else {
      category = "Obese";
      suggestion = "Strict diet with professional guidance.";
    }

    setResult({ bmi, category, suggestion });
  };

  return (
    <Container className="my-5 w-50">
      <h2 className="text-center mb-4">BMI Calculator</h2>
      <Form onSubmit={calculateBMI}>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Enter weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Enter height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="dark" className="w-100">Calculate</Button>
      </Form>

      {result && (
        <Alert variant="info" className="mt-4">
          <h5>Your BMI: {result.bmi}</h5>
          <p><strong>Status:</strong> {result.category}</p>
          <p><strong>Suggested Diet:</strong> {result.suggestion}</p>
        </Alert>
      )}
    </Container>
  );
};

export default Calculator;