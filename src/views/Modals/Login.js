import React, { useState, useRef } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./Modals.css";
import { auth } from "../../Firebase";
import { useAuth } from "../../conexts/AuthContext";
import { useHistory } from "react-router-dom";

const LoginModal = ({ modalShow, setShow }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const { history } = useHistory();
  //const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault(); //not needed unless using the form submit?

    //error validation
    if (emailRef.current.value.trim() === "") {
      return setError("Email cannot be blank");
    }
    if (passwordRef.current.value.trim() === "") {
      return setError("Password cannot be blank");
    }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value).then(
        () => setShow(false)
        // .then(() => history.push("/"))
      );
    } catch {
      setError("Failed to sign in");
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
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="signup-form" className="formMain">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              ref={emailRef}
              // placeholder={email}
              // onChange={(text) => setEmail(text.target.value)}
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
              ref={passwordRef}
              // placeholder="Password"
              // onChange={(pass) => setPassword(pass.target.value)}
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
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
      <auth />
    </>
  );
};

export default LoginModal;
