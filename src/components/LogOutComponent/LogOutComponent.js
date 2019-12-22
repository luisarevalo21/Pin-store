import React, { Component } from "react";
import classes from "./LogOutComponent.module.css";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  state = {
    redirect: false
  };

  logoutUser = () => {
    // firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     console.log("log out was sucessful");
    //     this.setState({ redirect: true });
    //   })
    //   .catch(error => console.log("error occured"));
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <button onClick={this.props.logout} className={classes.Button}>
        Log Out
      </button>
    );
  }
}

export default Logout;
// const logOutUser = props => {
//   firebase.auth().signOut();

//   return <Redirect to="/" />;

//   //   props.history.push("/");
// };
// const LogOut = props => {
//   console.log("props is", props);
//   //return <Button onClick={logOutUser} children="Log Out" />;

// };
// export default LogOut;
