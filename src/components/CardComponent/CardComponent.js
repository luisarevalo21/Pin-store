import React from "react";
import classes from "./CardComponent.module.css";

const cardComponent = props => (
  <div className={classes.Card} onClick={props.clicked}>
    <img src={props.image} alt="image" />
    {/* <p>{props.name}</p> */}
    <p className={classes.Title}>{props.title}</p>
    <p className={classes.Price}>${props.price}</p>
    <p>{props.id}</p>
  </div>
);

export default cardComponent;
