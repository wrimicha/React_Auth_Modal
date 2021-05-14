import React, { useState, useRef } from "react";
import "./Modals.css";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import db from "../../Firebase";

const CreateGuide = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const [error, setError] = useState("");
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault(); //not needed unless using the form submit?

    //error validation
    if (titleRef.current.value.trim() === "") {
      return setError("Title cannot be blank");
    }
    if (bodyRef.current.value.trim() === "") {
      return setError("Body cannot be blank");
    }

    try {
      setError("");
      setLoading(true);
      await db
        .collection("accordion")
        .add({ title: titleRef.current.value, body: bodyRef.current.value })
        .then(() => setShow(false));
    } catch {
      setError("Failed to add post");
    }
    setLoading(false);
  };

  return (
    <div>
      <Modal
        centered
        size="xl"
        dialogClassName="mainModal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form id="signup-form" className="formMain">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" ref={titleRef} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Body</Form.Label>
            <Form.Control required type="textarea" ref={bodyRef} />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateGuide;
