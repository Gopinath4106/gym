import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const Login = () => {
  const [msg, setMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setMsg("Login button clicked (no backend connected)");
  };

  return (
    <Container className="my-5 w-50">
      <h2 className="text-center mb-4">Login</h2>
      {msg && <Alert variant="info">{msg}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button type="submit" variant="dark" className="w-100">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;