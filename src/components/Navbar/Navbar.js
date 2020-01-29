import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from './../../assets/images/Logo/Logo1.png';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import LogOutComponent from "../LogOutComponent/LogOutComponent";
import ProtectedRoute from "../ProtectedRoute";
import Home from "../HomeComponent/HomeComponent";
import Dashboard from "../../containers/DashBoardComponent/DashBoardComponent";
const navbar = props => {
  // const dashboard = props.authenticated ? <NavLink to="/dashboard">Dashboard</NavLink> : null;
  // const shoppingCart = props.authenticated ? (
  //   <NavLink to="/shopping_cart">Shopping Cart</NavLink>
  // ) : null;
  const authenticatedData = props.authenticated ? (
    <>
      <NavLink to="/shopping_cart">Shopping Cart</NavLink>
      <NavLink to="/dashboard" style={{fontSize:'18px'}} activeStyle={{ fontSize: '20px' }}>
        Dashboard
      </NavLink>
    </>
  ) : (
    <NavLink to="/account" style={{fontSize:'18px'}} activeStyle={{ fontSize: '20px' }}>
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
      <Navbar fixed="top" collapseOnSelect expand="md" bg='white'>
        <Navbar.Brand className="p-0" href="/"><img src={Logo} className=""  alt="" width="30%"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-5">
            <NavLink to="/" exact style={{fontSize:'18px'}} activeStyle={{ fontSize: '20px' }}>
              Home
            </NavLink>
            <NavLink to="/about" style={{fontSize:'18px'}} activeStyle={{ fontSize: '20px' }}>
              About
            </NavLink>
            <NavLink to="/store" style={{fontSize:'18px'}} activeStyle={{ fontSize: '20px' }}>
              Store
            </NavLink>

            <NavLink to="/contact" style={{fontSize:'18px'}} activeStyle={{ fontSize: '20px' }}>
              Contact
            </NavLink>
            {authenticatedData}
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
