import React, { Component } from "react";
import classes from "./SignUpComponent.module.css";
import { withRouter } from "react-router-dom";
import InputComponent from "../../components/InputComponents/InputComponents";
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
    formSubmission: {
      email: {
        value: "",
        validation: {
          required: true
        },
        type: "email",
        valid: false,
        touched: false
      },

      password: {
        value: "",
        validation: {
          required: true,
          minLength: 5
        },
        type: "password",
        valid: false,
        touched: false
      },

      reEnterPassword: {
        value: "",
        validation: {
          required: true,
          minLength: 5
        },
        type: "repassword",
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    reenteredpassword: "",
    error: null
  };

  handleChange = (event, name) => {
    const formSubmissionCopy = { ...this.state.formSubmission };

    const formElement = formSubmissionCopy[name];

    formElement.value = event.target.value;
    formElement.touched = true;

    console.log("the value is ", formElement.value);
    formElement.valid = this.checkValdity(
      formElement.value,
      formElement.validation
    );

    let formIsValid = true;
    for (let element in formSubmissionCopy) {
      formIsValid = formSubmissionCopy[element].valid && formIsValid;
    }

    formSubmissionCopy[name] = formElement;

    this.setState({
      formSubmission: formSubmissionCopy,
      formIsValid: formIsValid
    });
  };

  checkValdity(value, rules) {
    console.log("the vlaue is", value);
    console.log(rules);
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length > rules.minLength && isValid;
    }

    // if (rules.type) {
    //   isValid = value.type === rules.type && isValid;
    // }
    // if (rules.minValue) {
    //   isValid = value > rules.minValue && isValid;
    // }

    return isValid;
  }
  // handleInputChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  handleSubmit = event => {
    event.preventDefault();
    const { email, password, reEnterPassword } = this.state.formSubmission;
    if (password.value === reEnterPassword.value) {
      console.log("passwords are the same");
      // firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email.value, password.value)
      //   .then(user => {
      //     alert("You successfully Signed Up");
      //     this.props.history.push("/");
      //   })
      //   .catch(error => {
      //     alert("An error was submitted: " + error);
      //     this.setState({ error: error });
      //   });
    } else {
      alert("Passwords don't match");
    }
  };
  render() {
    // const { email, password, reenteredpassword, error } = this.state;
    console.log(this.state);
    let formElementArray = [];
    for (let key in this.state.formSubmission) {
      formElementArray.push({
        id: key,
        config: this.state.formSubmission[key]
      });
    }

    let form = formElementArray.map(element => (
      <InputComponent
        key={element.id}
        type={element.config.type}
        changed={e => this.handleChange(e, element.id)}
        invalid={!element.config.valid}
        touched={element.config.touched}
      />
    ));
    return (
      <form className={classes.Layout} onSubmit={this.handleSubmit}>
        {form}
        <button className={classes.Button} disabled={!this.state.formIsValid}>
          Sign Up
        </button>
      </form>
    );
  }
}
export default withRouter(SignUpComponent);
//export default withRouter(SignUpComponent);

{
  /* <h3>Re-Password</h3>
<input
  placeholder="re-password"
  type="password"
  name="reenteredpassword"
  value={reenteredpassword}
  onChange={this.handleInputChange}
  //onChange={error => this.handleInputChange("reenterPassword", error)}
/> */
}
{
  /* <input
          placeholder="email"
          type="email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
          //onChange={error => this.handleInputChange("email", error)}
        />
        <h3>Password</h3>
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          //onChange={error => this.handleInputChange("password", error)}
        /> */
}
