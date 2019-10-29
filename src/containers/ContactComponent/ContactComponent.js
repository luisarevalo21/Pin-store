import React, { Component } from "react";
import classes from "./ContactComponent.module.css";
class Contact extends Component {
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    orderNumber: "",
    message: ""
  };

  handleChange = (input, event) => {
    console.log("change occured ", event.target.value);
    this.setState({ [input]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    console.log("submit requested");
  };
  render() {
    console.log(this.state);
    return (
      <div className={classes.Layout}>
        <h2>Contact</h2>
        <form className={classes.ContactComponent} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            onChange={e => this.handleChange("name", e)}
          />
          <input
            type="email"
            placeholder="example@mail.com"
            onChange={e => this.handleChange("email", e)}
          />
          <input
            type="tel"
            placeholder="123-456-7890"
            onChange={e => this.handleChange("phoneNumber", e)}
          />
          <input
            type="text"
            placeholder="order number"
            onChange={e => this.handleChange("orderNumber", e)}
          />
          <textarea
            type="text"
            placeholder="message"
            onChange={e => this.handleChange("message", e)}
          />
          <button>Send Message</button>
        </form>
      </div>
    );
  }
}

export default Contact;
