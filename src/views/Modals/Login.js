import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function LoginModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signIn = () => {
    setShow(false);
    //signInWithEmailAndPassword
  };

  return (
    // <div id="modal-login" class="modal">
    //   <div class="modal-content">
    //     <h4>Login</h4>
    //     <br />
    //     <form id="login-form">
    //       <div class="input-field">
    //         <input type="email" id="login-email" required />
    //         <label for="login-email">Email address</label>
    //       </div>
    //       <div class="input-field">
    //         <input type="password" id="login-password" required />
    //         <label for="login-password">Your password</label>
    //       </div>
    //       <button class="btn yellow darken-2 z-depth-0">Login</button>
    //     </form>
    //   </div>
    // </div>

    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
          <Button variant="primary" onClick={handleClose}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
