import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Modals.css";

function LoginModal() {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("Enter your email");
  const [password, setPassword] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signin = () => {
    setShow(false);
    console.log(email, password);
    //signInWithEmailAndPassword
  };

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
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Form className="formMain">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
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
              required
              type="password"
              placeholder="Password"
              onChange={(pass) => setPassword(pass.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={signin}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
