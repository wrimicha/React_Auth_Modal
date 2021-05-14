import "./App.css";
//import NavBar from "../components/Navbar";
//import { Home } from "./views/Signup";
//import { About } from "./views/Signin";
import CreateGuide from "./views/Modals/CreateGuide";
import SignupModal from "./views/Modals/Signup";
import LoginModal from "./views/Modals/Login";
import Account from "./views/Account";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "./components/Nav/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import db from "./Firebase";
import { auth } from "./Firebase";
import React, { useState } from "react";
import { AuthProvider } from "./conexts/AuthContext";
import PrivateRoute from "./components/Nav/PrivateRoute";

function App() {
  const [userSignedIn, setUserSignedIn] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserSignedIn(true);
    }
  });

  return (
    <div>
      <Router>
        <AuthProvider>
          <Nav />
          <Switch>
            <PrivateRoute exact path="/account" component={Account} />
            <Route exact path="/">
              <Redirect to="/account" />
            </Route>
            <Route exact path="/logout" />
            <Route exact path="/createguide" component={CreateGuide} />
            <Route exact path="/login" component={LoginModal} />
            <Route exact path="/signup" component={SignupModal} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
