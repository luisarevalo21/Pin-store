import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import LogOutComponent from "../LogOutComponent/LogOutComponent";
import ProtectedRoute from "../ProtectedRoute";
import Home from "../HomeComponent/HomeComponent";
import Dashboard from "../../containers/DashBoardComponent/DashBoardComponent";

// import CartComponent from "../../containers/CartComponent/CartComponent";
const navbar = props => {
  // const dashboard = props.authenticated ? <NavLink to="/dashboard">Dashboard</NavLink> : null;
  // const shoppingCart = props.authenticated ? (
  //   <NavLink to="/shopping_cart">Shopping Cart</NavLink>
  // ) : null;
  const authenticatedData = props.authenticated ? (
    <>
      {/* <NavLink to="/shopping_cart">Shopping Cart</NavLink> */}
      <NavLink to="/dashboard" activeStyle={{ backgroundColor: "red" }}>
        Dashboard
      </NavLink>
    </>
  ) : (
    <NavLink to="/account" activeStyle={{ backgroundColor: "red" }}>
      Account
    </NavLink>
  );
  const logout = props.authenticated ? <LogOutComponent /> : null;
  // const dashboard = props.authenticated ? (
  //   <NavLink to="/dashboard" activeStyle={{ backgroundColor: "red" }}>
  //     Dashboard
  //   </NavLink>
  // ) : null;

  // const account = props.authenticated ? null : (
  //   <NavLink to="/account" activeStyle={{ backgroundColor: "red" }}>
  //     Account
  //   </NavLink>

  return (
    <div>
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
            {authenticatedData}

            <NavLink to="/cart" activeStyle={{ backgroundColor: "red" }}>
              Cart {props.cartSize}
            </NavLink>
            {logout}
            {/* {dashboard}
            {account} */}
            {/* <NavLink to="/account" activeStyle={{ backgroundColor: "red" }}>
              Account
            </NavLink> */}
            {/* <NavLink to="/signin" activeStyle={{ backgroundColor: "red" }}>
              Sign in
            </NavLink>
            <NavLink to="/signup" activeStyle={{ backgroundColor: "red" }}>
              Sign up
            </NavLink> */}
            {/* {dashboard} */}

            {/* {dashboard} */}
            {/* <NavLink to="/admin" activeStyle={{ backgroundColor: "red" }}>
            Admin
          </NavLink> */}
            {/* <NavLink to="/" activeClassName="active">
            Contact
          </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Switch>
        {/* <Route exact path="/" component={Home} /> */}
      {/* <ProtectedRoute authenticated={props.authenticated} path="/dashboard" component={Dashboard} />
      </Switch> */}
    </div>
  );
};

export default navbar;
