import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const navbar = props => (
  <Navbar sticky="top" collapseOnSelect expand="md">
    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" exact activeClassName="active">
          About
        </NavLink>
        <NavLink to="/store" activeClassName="active">
          Store
        </NavLink>
        {/* <NavLink to="/" activeClassName="active">
          Contact
        </NavLink> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbar;
