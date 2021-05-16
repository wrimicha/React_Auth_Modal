import React, { useState, useRef } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./Modals.css";
import { auth } from "../../Firebase";
import { useAuth } from "../../conexts/AuthContext";
import { useHistory } from "react-router-dom";
import db from "../../Firebase";

const UserInfo = ({ modalShow, setShow }) => {
  const { currentUser } = useAuth();
  const [bio, setBio] = useState("");

  if (currentUser) {
    db.collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => setBio(doc.data().bio));
  }

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
          <Modal.Title>User Info</Modal.Title>
        </Modal.Header>
        <Form id="user-form" className="formMain">
          <Form.Group controlId="formBasicEmail">
            <Form.Text>{currentUser && currentUser.email} </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicBio">
            <Form.Text>{bio}</Form.Text>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserInfo;
