import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import "./Accordion.css";
import db from "../../Firebase";
import { setupGuides } from "../../views/ViewFunctions";

//var data = [];

const data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Victor Wayne" },
  { id: 3, name: "Jane Doe" },
];

function AccordionComponent() {
  const [accordionInfo, setAccordionInfo] = useState([]);

  useEffect(() => {
    db.collection("accordion-info")
      .get()
      .then((snapshot) => {
        setAccordionInfo(snapshot.docs);
      });
  }, [accordionInfo]);

  // setTimeout(() => {
  //   console.log(accordionInfo);
  // }, 1500);

  //snapshot.docs.data().title

  return (
    <Accordion class="accordion" defaultActiveKey="0">
      {accordionInfo.map((info, i) => (
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey={i.toString()}
            >
              {info.data().title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i.toString()}>
            <Card.Body>{info.data().body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default AccordionComponent;
