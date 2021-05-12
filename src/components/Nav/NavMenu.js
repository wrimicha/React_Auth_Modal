import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LoginModal from "../../views/Modals/Login";
import "./NavMenu.css";
import { auth } from "../../Firebase";

function NavMenu() {
  const [userName, setUserName] = useState("");

  const changeUserName = (user) => {
    if (user) {
      setUserName(user.email);
    }
  };

  auth.onAuthStateChanged((user) => {
    changeUserName(user);
  });

  const signOut = () => {
    auth.signOut().then(() => {
      console.log("signed out");
      setUserName("");
    });
  };

  return (
    <nav class="menuBar navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="menuOptions collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link to="/account" class="nav-link">
              <li class="logged-in">Account</li>
            </Link>
            <Link to="/logout" class="nav-link">
              <li class="logged-in" onClick={() => signOut()}>
                Logout
              </li>
            </Link>
            <Link to="/createguide" class="nav-link">
              <li class="logged-in">Create Guide</li>
            </Link>
            <Link to="/login" class="nav-link">
              <li class="logged-out">Login</li>
            </Link>
            <Link to="/signup" class="nav-link">
              <li class="logged-out">Sign up</li>
            </Link>

            {/* <Link to="/about" class="nav-link">
              <li className="nav-item">About</li>
            </Link>
            <Link to="/home" class="nav-link">
              <li className="nav-item">Home</li>
            </Link> */}
          </ul>
          <text style={{ maxWidth: 250 }}>{userName}</text>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
