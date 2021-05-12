import "./App.css";
//import NavBar from "../components/Navbar";
//import { Home } from "./views/Signup";
//import { About } from "./views/Signin";
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

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/">
            <Redirect to="/account" />
          </Route>
          <Route exact path="/logout" />
          <Route exact path="/createguide" component={LoginModal} />
          <Route exact path="/login" component={LoginModal} />
          <Route exact path="/signup" component={SignupModal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
