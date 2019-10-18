import React from "react";
import classes from "./CardComponent.module.css";

const cardComponent = props => (
  <div className={classes.Card}>
    <img src={props.image} />
    {/* <p>{props.name}</p> */}
    <p className={classes.Title}>{props.title}</p>
    <p className={classes.Price}>${props.price}.00</p>
    <p>{props.id}</p>
  </div>
);

export default cardComponent;
