import React from "react";
import classes from "./CardComponent.module.css";

const cardComponent = props => (
  <div className={classes.Card}>
    <img src={props.image} />
    {/* <p>{props.name}</p> */}
    <p>{props.title}</p>
    <p>$ {props.price}</p>
    <p>{props.id}</p>
  </div>
);

export default cardComponent;
