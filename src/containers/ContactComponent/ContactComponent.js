import React, { Component } from "react";
import classes from "./ContactComponent.module.css";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className={classes.ContactComponent}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone number" />
        <input type="text" placeholder="order number" />
        <input type="text" placeholder="message" />
        <button>Submit</button>
      </div>
    );
  }
}

export default Contact;
