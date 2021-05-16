import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./NavMenu.css";
import { auth } from "../../Firebase";
import { useAuth } from "../../conexts/AuthContext";
import ConditionalNav from "./NavFunctions";
import CreateGuideModal from "../../views/Modals/CreateGuide";
import LoginModal from "../../views/Modals/Login";
import SignupModal from "../../views/Modals/Signup";
import UserInfo from "../../views/Modals/UserInfo";

function NavMenu() {
  const { currentUser, logout } = useAuth();
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);
  const [userInfoShow, setUserInfoShow] = useState(false);

  auth.onAuthStateChanged(() => ConditionalNav(currentUser));

  return (
    <>
      <CreateGuideModal
        modalShow={createModalShow} //createModalShow
        setShow={setCreateModalShow}
      />
      <LoginModal
        modalShow={loginModalShow} //createModalShow
        setShow={setLoginModalShow}
      />
      <SignupModal
        modalShow={signupModalShow} //createModalShow
        setShow={setSignupModalShow}
      />
      <UserInfo
        modalShow={userInfoShow} //createModalShow
        setShow={setUserInfoShow}
      />

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
              <Link
                style={{ display: "none" }}
                to="/account"
                class="nav-link logged-in"
              >
                <li class="logged-in" style={{ display: "none" }}>
                  Account
                </li>
              </Link>
              <Link
                style={{ display: "none" }}
                to="/logout"
                class="nav-link logged-in"
                onClick={() => logout()}
              >
                <li class="logged-in" style={{ display: "none" }}>
                  Logout
                </li>
              </Link>
              <Link
                style={{ display: "none" }}
                onClick={() => setCreateModalShow(true)}
                className="nav-link logged-in"
              >
                <li className="logged-in" style={{ display: "none" }}>
                  Create Guide
                </li>
              </Link>
              <Link
                style={{ display: "none" }}
                onClick={() => setLoginModalShow(true)}
                className="nav-link logged-out"
              >
                <li class="logged-out" style={{ display: "none" }}>
                  Login
                </li>
              </Link>
              <Link
                style={{ display: "none" }}
                onClick={() => setSignupModalShow(true)}
                className="nav-link logged-out"
              >
                <li class="logged-out" style={{ display: "none" }}>
                  Sign up
                </li>
              </Link>
            </ul>
            <text
              onClick={() => setUserInfoShow(true)}
              style={{ maxWidth: 250 }}
            >
              {currentUser && currentUser.email}
            </text>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMenu;
