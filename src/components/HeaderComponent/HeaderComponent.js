import React from "react";
import logo from "../../assets/images/Logo/Logo.jpg";
import classes from "./HeaderComponent.module.css";
const headerComponent = props => (
  <div className={classes.Layout}>
    <h1> Twin Bear Creations</h1>
    <img src={logo} alt="logo" />
  </div>
);

export default headerComponent;
