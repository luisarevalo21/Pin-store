import React from "react";
import classes from "./TextComponent.module.css";

const textComponent = props => (
  <div className={classes.TextComponent}>
    <h2>{props.title}</h2>
    <p>{props.text}</p>
    <p>{props.note}</p>
  </div>
);

export default textComponent;
