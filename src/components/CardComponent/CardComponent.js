import React from "react";
import classes from "./CardComponent.module.css";

const cardComponent = props => (
  <div className={classes.Card}>
    <p>Image here</p>
    <p>Item name</p>
    <p>$Price</p>
    <p>id</p>
  </div>
);

export default cardComponent;
