import React, { Component } from "react";
import classes from "./SignUpComponent.module.css";
import { withRouter } from 'react-router-dom';

// class SignUpComponent extends Component {
//   state = {
//     email: "",
//     password: "",
//     reenterPassword: ""
//   };

//   handleChange = (input, event) => {
//     console.log(event.target.type);
//     this.setState({ [input]: event.target.value });
//   };

//   handleSubmit = event => {
//     //remove to navigation to new page once submission is perforemd
//     event.preventDefault();

//     console.log("submit issued");
//   };
//   render() {
//     return (
//       <form className={classes.Layout} onSubmit={this.handleSubmit}>
//         <h3>Email</h3>
//         <input
//           placeholder="email"
//           type="email"
//           onChange={e => this.handleChange("email", e)}
//         />
//         <h3>Password</h3>
//         <input
//           placeholder="password"
//           type="password"
//           onChange={e => this.handleChange("password", e)}
//         />
//         <h3>Re-Password</h3>
//         <input
//           placeholder="re-password"
//           type="password"
//           onChange={e => this.handleChange("reenterPassword", e)}
//         />
//         <button className={classes.Button}>Sign Up</button>
//       </form>
//     );
//   }
// }

// export default SignUpComponent;
//import { withRouter } from 'react-router-dom';
import firebase from "../../firebase";

class SignUpComponent extends Component {
 state = {
   email: '',
   password: '',
   reenteredpassword: '',
   error: null,
 };
handleInputChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 };
handleSubmit = (event) => {
      event.preventDefault();
      const { email, password, reenteredpassword, error } = this.state;
      if(password === reenteredpassword){
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
              alert('You successfully Signed Up');
              this.props.history.push('/')
            })
            .catch((error) => {
              alert('An error was submitted: ' + error); 
              this.setState({ error: error })
            });
      }
      else{
        alert("Passwords don't match");
      }
 };
 render() {
      const { email, password, reenteredpassword, error } = this.state;
      return (
        <form className={classes.Layout} onSubmit={this.handleSubmit}>
          <h3>Email</h3>
          <input
            placeholder="email"
            type="email"
            name = "email"
            value = {email}
            onChange={this.handleInputChange}
            //onChange={error => this.handleInputChange("email", error)}
          />
          <h3>Password</h3>
          <input
            placeholder="password"
            type="password"
            name = "password"
            value={password}
            onChange={this.handleInputChange}
            //onChange={error => this.handleInputChange("password", error)}
          />
          <h3>Re-Password</h3>
          <input
            placeholder="re-password"
            type="password"
            name = "reenteredpassword"
            value={reenteredpassword}
            onChange={this.handleInputChange}
            //onChange={error => this.handleInputChange("reenterPassword", error)}
          />
          <button className={classes.Button}>Sign Up</button>
        </form>
      );
 }
}
//export default withRouter(SignUpComponent);
export default withRouter(SignUpComponent);