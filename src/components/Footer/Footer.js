import React from "react";
import classes from "./Footer.module.css";
import facebook from "../../assets/images/Social/FacebookIcon.png";
import instagram from "../../assets/images/Social/InstagramIcon.png";
import Contact from "../../containers/ContactComponent/ContactComponent";
import { Route, NavLink } from "react-router-dom";
const footer = props => (
  <div className={classes.Footer} >
    <div className={classes.Info}>
      <h3>Twin Bears Creation</h3>
      <p>
        Welcome! This shop will mainly sell fantasy pin designs. Most designs
        will be Disney inspired. Some will be anime pins. Also will have various
        accessories and other items.
      </p>
    </div>
    <div className={classes.Social}>
      <h3>Social</h3>
      <div>
        <a href="https://www.facebook.com/twinbearcreations/">
          <img src={facebook} />
        </a>
        <a href="https://www.instagram.com/twinbearpins/">
          <img src={instagram} />
        </a>
      </div>
    </div>

    <div className={classes.Info}>
      <h3>Info</h3>
      <Route component={Contact}>
        <NavLink to="/contact">
          <p>Contact</p>
        </NavLink>
      </Route>
    </div>
  </div>
);

export default footer;
