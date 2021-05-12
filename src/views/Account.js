import Accordion from "../../src/components/Accordion/Accordion";
import { auth } from "../Firebase";
import db from "../Firebase";
import React, { useState } from "react";

function App() {
  const [userSignedIn, setUserSignedIn] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserSignedIn(true);
    }
  });

  if (userSignedIn) {
    return <Accordion />;
  } else {
    return <text> Please sign in </text>;
  }
  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     return <Accordion />;
  //   } else {
  //     return <text> Please sign in </text>;
  //   }
  // });
}

export default App;
