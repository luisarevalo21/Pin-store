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
        <NavLink to="/" exact activeStyle={{ backgroundColor: "red" }}>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle={{ backgroundColor: "red" }}>
          About
        </NavLink>
        <NavLink to="/store" activeStyle={{ backgroundColor: "red" }}>
          Store
        </NavLink>

        <NavLink to="/contact" activeStyle={{ backgroundColor: "red" }}>
          Contact
        </NavLink>
        <NavLink to="/admin" activeStyle={{ backgroundColor: "red" }}>
          Admin
        </NavLink>
        {/* <NavLink to="/" activeClassName="active">
          Contact
        </NavLink> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbar;
