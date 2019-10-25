import React, { Component } from "react";
import classes from "./SignUpComponent.module.css";

class SignUpComponent extends Component {
  state = {
    email: "",
    password: "",
    reenterPassword: ""
  };

  handleChange = (input, event) => {
    console.log(event.target.type);
    this.setState({ [input]: event.target.value });
  };

  handleSubmit = event => {
    //remove to navigation to new page once submission is perforemd
    event.preventDefault();

    console.log("submit issued");
  };
  render() {
    return (
      <form className={classes.Layout} onSubmit={this.handleSubmit}>
        <h3>Email</h3>
        <input
          placeholder="email"
          type="email"
          onChange={e => this.handleChange("email", e)}
        />
        <h3>Password</h3>
        <input
          placeholder="password"
          type="password"
          onChange={e => this.handleChange("password", e)}
        />
        <h3>Re-Password</h3>
        <input
          placeholder="re-password"
          type="password"
          onChange={e => this.handleChange("reenterPassword", e)}
        />
        <button className={classes.Button}>Sign Up</button>
      </form>
    );
  }
}

export default SignUpComponent;
