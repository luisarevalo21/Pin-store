import React, { Component } from "react";
import classes from "./SignInComponent.module.css";
import firebase, { provider } from "../../firebase";
import { withRouter } from "react-router-dom";
import InputComponent from "../../components/InputComponents/InputComponents";
import { element } from "prop-types";
class SignInComponent extends Component {
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
      }
    },
    formIsValid: false,

    error: null

    // email: "",
    // password: "",
    // error: null
  };

  handleGoogleSignIn = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            console.log("the rrsult is", result.user);
            // this.setState({ user: result.user });
            this.props.history.push("/");
          })
          .catch(error => this.setState({ error }));
      });
    // firebase
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then(result => {
    //     const user = result.user;
    //     this.setState({ user });
    //   });
  };

  handleChange = (event, name) => {
    const submissionFormCopy = { ...this.state.formSubmission };

    const submissionFormElement = { ...submissionFormCopy[name] };
    submissionFormElement.value = event.target.value;
    submissionFormElement.touched = true;

    submissionFormElement.valid = this.checkValdity(
      submissionFormElement.value,
      submissionFormElement.validation
    );

    submissionFormCopy[name] = submissionFormElement;

    let formIsValid = true;
    for (let element in submissionFormCopy) {
      formIsValid = submissionFormCopy[element].valid && formIsValid;

      // console.log("for is valid ", formIsValid);
    }

    this.setState({
      formSubmission: submissionFormCopy,
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

    const { email, password } = this.state.formSubmission;
    console.log("the email is", email.value);
    console.log("the password is", password.value);

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then(result => {
            if (result.user) {
              this.setState({ user: result.user });
              this.props.history.push("/");
            }
          })
          .catch(error => {
            this.setState({ error: error });
          });
      });
    // .catch(error => {
    //   // alert("An error was submitted: " + error);
    // });
  };
  render() {
    // const { email, password, error } = this.state;
    // console.log(this.state.formIsValid);
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

    console.log("this.state", this.state);
    // console.log(formElementArray);
    const googleButtonClasses = [classes.Google_Button, classes.GoogleButton];

    return (
      <form className={classes.Layout} onSubmit={this.handleSubmit}>
        {form}
        <button className={classes.Button} disabled={!this.state.formIsValid}>
          Sign In
        </button>
        <button
          onClick={this.handleGoogleSignIn}
          className={googleButtonClasses.join(" ")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </button>
      </form>
    );
  }
}

export default withRouter(SignInComponent);

{
  /* <input
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
        /> */
}
