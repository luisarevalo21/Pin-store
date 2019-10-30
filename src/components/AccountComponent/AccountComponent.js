import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SignInComponent from "../../containers/SignInComponent/SignInComponent";
import SignUpComponent from "../../containers/SignUpComponent/SignUpComponent";
import classes from "./AccountComponent.module.css";
const accountComponent = props => (
  <div className={classes.Top}>
    <Tabs defaultActiveKey="signin" className={classes.Layout}>
      <Tab eventKey="signin" title="Sign In">
        <SignInComponent />
      </Tab>
      <Tab title="Sign Up" eventKey="signup">
        <SignUpComponent />
      </Tab>
    </Tabs>
  </div>
);

export default accountComponent;
