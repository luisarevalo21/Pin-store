import React from 'react';
import classes from "./LogOutComponent.module.css";
import firebase from 'firebase';
const logOutUser = () => {
 firebase.auth().signOut()
};
const LogOut = () => {
 //return <Button onClick={logOutUser} children="Log Out" />;
 return <button onClick={logOutUser} className={classes.Button}>Log Out</button>
};
export default LogOut;