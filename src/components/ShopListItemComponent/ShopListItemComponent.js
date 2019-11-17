import React from "react";
import classes from "./ShopListItemComponent.module.css";

const shopListItemComponent = props => (
  <div className={classes.Layout}>
    <img src={props.image} className={classes.Image} />
    <h4 className={classes.Title}>{props.title}</h4>

    <div className={classes.PriceBox}>
      <p className={classes.Price}>{props.price}</p>
      <button onClick={props.delete}> delete</button>
    </div>

    {/* <button>x</button> */}
  </div>
);

export default shopListItemComponent;
