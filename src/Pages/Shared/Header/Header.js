import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";

const Header = () => {
  const [user, ] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href as={Link} to="/home">
            Travel Guru
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                style={{ textDecoration: "none" }}
                className="mx-4"
                to="/about"
              >
                About
              </Link>
              {!user ? <Link
                style={{ textDecoration: "none" }}
                className="mx-4"
                to="/login"
              >
                Login
              </Link> : <button type="button" onClick={logout} class="btn btn-danger">Logout</button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
