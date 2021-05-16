import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./Modals.css";
import { auth } from "../../Firebase";
import { useAuth } from "../../conexts/AuthContext";

function SignupModal({ modalShow, setShow }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const bio = useRef();

  //const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const { currentUser } = useAuth();

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault(); //not needed unless using the form submit?

    if (emailRef.current.value === "") {
      return setError("Email cannot be blank");
    }
    if (passwordRef.current.value === "") {
      return setError("Password cannot be blank");
    }
    if (passwordConfirmRef.current.value === "") {
      return setError("Password confirmation cannot be blank");
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      signup(
        emailRef.current.value,
        passwordRef.current.value,
        bio.current.value
      ).then(() => setShow(false));
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <>
      <Modal
        centered
        size="xl"
        dialogClassName="mainModal"
        show={modalShow}
        onHide={() => setShow(false)}
      >
        <Modal.Header>
          <Modal.Title>Get Started</Modal.Title>
        </Modal.Header>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className="formMain">
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              ref={emailRef}
              //placeholder={email}
              //onChange={(text) => setEmail(text.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              ref={passwordRef}
              // placeholder="Password"
              // onChange={(pass) => setPassword(pass.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password-confirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              ref={passwordConfirmRef}
              // placeholder="Password"
              // onChange={(pass) => setConfirmPassword(pass.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Enter one line bio</Form.Label>
            <Form.Control required type="text" ref={bio} />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button disabled={loading} variant="primary" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignupModal;
