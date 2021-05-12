import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Modals.css";
import { auth } from "../../Firebase";

function SignupModal() {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("Enter your email");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log(email, password);
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          setShow(false);
          console.log(cred);
        })
        .catch((e) => console.log(e.code));
    }
  };

  // auth.createUserWithEmailAndPassword(email, password).then((cred) => {
  //   console.log(cred.user);
  //   // close the signup modal & reset form
  //   const modal = document.querySelector("#modal-signup");
  //   setShow(false);
  // });

  return (
    <>
      <Modal
        centered
        size="xl"
        dialogClassName="mainModal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Get Started</Modal.Title>
        </Modal.Header>
        <Form className="formMain">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder={email}
              onChange={(text) => setEmail(text.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(pass) => setPassword(pass.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(pass) => setConfirmPassword(pass.target.value)}
            />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={signup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignupModal;
