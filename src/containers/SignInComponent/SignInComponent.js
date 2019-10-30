import React, { Component } from "react";
import classes from "./SignInComponent.module.css";
import firebase from "../../firebase";

class SignInComponent extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        alert("You successfully Signed In");
        //this.props.history.push("../DashBoardComponent/DashBoardComponent");
      })
      .catch(error => {
        alert("An error was submitted: " + error);
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <form className={classes.Layout} onSubmit={this.handleSubmit}>
        <h3>Email</h3>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleInputChange}
        />
        <h3>Password</h3>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleInputChange}
        />
        <button className={classes.Button}>Sign In</button>
      </form>
    );
  }
}

export default SignInComponent;
