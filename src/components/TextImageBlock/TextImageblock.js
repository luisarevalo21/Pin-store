import React from "react";
import classes from "./TextImageBlock.module.css";
const textImageBlock = props => {
  let block;

  switch (props.direction) {
    case "left":
      block = (
        <div className={classes.Layout}>
          <div className={classes.Description}>
            <h2>{props.title}</h2>
            <p> {props.text} </p>
            <a href="/" className={classes.ShopLink}>
              SHOP NOW >
            </a>
          </div>
          <img src={props.image} alt="image" className={classes.Image} />

          {/* <div

          
            style={{ backgroundImage: `url(${props.image})` }}
            className={classes.Image1}
          >
            {/* <img src={props.image} /> */}
          {/* </div> */}
        </div>
      );
      break;
    case "right":
      block = (
        <div className={classes.Layout}>
          {/* <div
            style={{ backgroundImage: `url(${props.image})` }}
            className={classes.Image2}
          >
          
            {/* <img src={props.image} /> */}
          {/* </div> */}
          <img src={props.image} alt="image" className={classes.ImageRight} />

          <div className={classes.DescriptionRight}>
            <h2>{props.title}</h2>
            <p> {props.text} </p>
            <a href="/" className={classes.ShopLink}>
              SHOP NOW >
            </a>
          </div>
        </div>
      );
      break;
  }

  return <>{block}</>;
};

export default textImageBlock;
