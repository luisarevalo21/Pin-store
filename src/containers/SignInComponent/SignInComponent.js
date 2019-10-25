import React, { Component } from "react";
import classes from "./SignInComponent.module.css";
class SignInComponent extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (input, event) => {
    // console.log(input);
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
        <button className={classes.Button}>Sign In</button>
      </form>
    );
  }
}

export default SignInComponent;
