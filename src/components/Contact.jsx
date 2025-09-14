import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="my-5" id="contact">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Your Email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Your Message" required />
        </Form.Group>
        <Button variant="dark" type="submit" className="w-100">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;